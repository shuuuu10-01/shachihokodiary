import  firebase from '~/plugins/firebase.js'
const db = firebase.firestore();
const diaryRef = db.collection('diary')

export const state = () => ({
  user: null,
  diaryList: []
})

export const getters = {
  getUser(state) {
    return state.user 
  },
  isAutheticated(state) {
    return !!state.user
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
  }
}

export const actions = {
  setUser ({ commit }, { id, name, email }) {
    commit("setUser", { id, name, email })
  },
  onAuth({ commit }) {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(user => {
        if(user) {
          const data = {
            name: user.displayName,
            email: user.email,
            id: user.uid
          };
          console.log(user,"resolve")
          commit("setUser", data)
          resolve()
        } else {
          reject()
        }
      })
    })
  },
  async fetchDiaryList ({ state, commit }) {
    await diaryRef.where('user_id', '==', state.user.id).orderBy('date', 'asc').get()
      .then(result => {
        commit('clearDiary')
        result.forEach(doc => {
          console.log(doc.data())
          commit('addDiary', doc.data())
        })
      })
  },
  postDiary({ commit, state }, { content, date, image }) {
    const postData = {
      user_id: state.user.id,
      content: content,
      date: date,
      image: image
    }
    diaryRef.add(postData)
    .then(result => {
      console.log(result)
      commit('addDiary', postData)
    })
    .catch(error => {
      console.log('error', error)
    })
  }
}
