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
    // var today = new Date().getDate();
    var today = 20; //ハッカソンの終了した日付
    const startDay = "2021-6-";
    for (let d = 1; d <= today; d++){
      const find = state.diaryList.find(({date}) => date === startDay + String(d));
      if(find){
        state.replaceList.push(find);
      } else {
        const defaultData = {
          user_id: state.user.id,
          content: "今日もいい日だった",
          image: "https://placeimg.com/300/300/nature",
          date: startDay + String(d)
        };
        state.replaceList.push(defaultData);
      }
    }
  },
  spliceList(state, payload) {
    for (let i=1; i<state.replaceList.length; i++) {
      console.log(i)
      if (payload.date === state.replaceList[i].date) {
        state.replaceList.splice(i, 1, payload)
        console.log(state.replaceList,"sple")
        break;
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
  async postDiary({ commit, state }, { content, date, image }) {
    const postData = {
      user_id: state.user.id,
      content: content,
      date: date,
      image: image
    };
    console.log(image, date);
    const find = await state.diaryList.find((item) => {
      return (item.date === date);
    });
    console.log(find, "find");
    if (find) {
      diaryRef.doc(find.id).update(postData);
      commit('spliceList', postData)
    } else {
      diaryRef
        .add(postData)
        .then(result => {
          console.log(result);
          commit("addDiary", postData);
          commit('spliceList', postData);
        })
        .catch(error => {
          console.log("error", error);
        });
    }
  }
  };
