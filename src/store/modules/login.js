const axios = require('axios').default

const getters = {
  userSuccess: state => state.user
}
const state = {
  user: ''
}
const mutations = {
  'userSuccess' (state, payload) {
    state.user = payload
  }
}
const actions = {
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
