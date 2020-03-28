const axios = require('axios').default

const getters = {
  userSuccess: state => state.userSuccess,
  userData: state => state.userData
}
const state = {
  userSuccess: '',
  userData: {}
}
const mutations = {
  'userSuccess' (state, payload) {
    state.userSuccess = payload
  },
  'userData' (state, payload) {
    state.userData = payload
  }
}
const actions = {
  setUser ({ commit }, payload) {
    localStorage.setItem('token', payload.token)
    commit('userData', payload)
  },
  async createUser ({ commit }, payload) {
    try {
      await axios({
        method: 'POST',
        url: 'http://localhost:3000/user',
        data: {
          name: payload.name,
          surname: payload.surname,
          email: payload.email,
          password: payload.password
        }
      })
      commit('userSuccess', true)
    } catch (error) {
      commit('userSuccess', false)
      console.log(error)
    }
  }
}

module.exports = {
  getters,
  state,
  mutations,
  actions
}
