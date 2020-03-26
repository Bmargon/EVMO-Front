const axios = require('axios').default

const getters = {}
const state = {}
const mutations = {}
const actions = {
  async createUser ({ commit }, payload) {
    try {
      const newUser = await axios({
        method: 'POST',
        url: 'http://localhost:3000/user',
        data: {
          name: payload.name,
          surname: payload.surname,
          email: payload.email,
          password: payload.password
        }
      })
      if (newUser) {
        console.log('registro ok')
      }
    } catch (error) {
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
