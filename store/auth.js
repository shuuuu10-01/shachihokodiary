import  firebase from '~/plugins/firebase.js'

export const state = () => ({
  user: null
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
  }
}
