import  firebase from '~/plugins/firebase.js'
const db = firebase.firestore();
const diaryRef = db.collection('diary')

export const state = () => ({
  user: null,
  diaryList: [],
  replaceList: []
})

export const getters = {
  getUser(state) {
    return state.user 
  },
  isAutheticated(state) {
    return !!state.user
  },
  getDiaryList(state) {
    return state.replaceList;
  }
}

export const mutations = {
  setUser(state, payload) {
    state.user = payload
  },
  addDiary(state, payload) {
    state.diaryList.push(payload)
  },
  clearDiary(state) {
    state.diaryList = []
  },
  replaceDiary(state) {
    state.replaceList = []
    var today = new Date().getDate();
    const startDay = "2021-6-";
    for (let d = 1; d <= today; d++){
      const find = state.diaryList.find(({date}) => date === startDay + String(d));
      if(find){
        state.replaceList.push(find);
      } else {
        const defaultData = {
          user_id: state.user.id,
          content: "今日もいい日だった",
          image: "https://placehold.jp/500x500.png",
          date: startDay + String(d)
        };
        state.replaceList.push(defaultData);
      }
    }
  }
}

export const actions = {
         setUser({ commit }, { id, name, email }) {
           commit("setUser", { id, name, email });
         },
         onAuth({ commit }) {
           return new Promise((resolve, reject) => {
             firebase.auth().onAuthStateChanged(user => {
               if (user) {
                 const data = {
                   name: user.displayName,
                   email: user.email,
                   id: user.uid
                 };
                 console.log(user, "resolve");
                 commit("setUser", data);
                 resolve();
               } else {
                 reject();
               }
             });
           });
         },
         async fetchDiaryList({ state, commit }) {
           await diaryRef
             .where("user_id", "==", state.user.id)
             .orderBy("date", "asc")
             .get()
             .then(result => {
               commit("clearDiary");
               result.forEach(doc => {
                 let postData = doc.data()
                 postData.id = doc.id
                 console.log(postData);
                 commit("addDiary", postData);
               });
             });
           commit("replaceDiary");
         },
         async postDiary({ dispatch, commit, state }, { content, date, image }) {
           const postData = {
             user_id: state.user.id,
             content: content,
             date: date,
             image: image
           };
           console.log(state.diaryList, date);
           const find = state.diaryList.find(({date}) => date === date);
           console.log(find, "find");
           if (find) {
             diaryRef.doc(find.id).update(postData);
             dispatch('fetchDiaryList')
           } else {
             diaryRef
               .add(postData)
               .then(result => {
                 console.log(result);
                 commit("addDiary", postData);
                 commit("replaceDiary");
               })
               .catch(error => {
                 console.log("error", error);
               });
           }
         }
       };
