export const state = () => ({
  session: {
    user: {},
    token: null
  },
  name: ''
})

export const actions = {

  async singInUser ({ commit }, payload) {
    try {
      const response = await this.$axios.$post('/auth/login', payload)
      commit('SET_SIGN_IN', response)
      localStorage.setItem('token', response.token)
      localStorage.setItem('user', JSON.stringify(response.dataUser))
      return true
    } catch (e) {
      console.log('el error es :', e)
      throw e
    }
  },

  nuxtClientInit ({ commit }) {
    if (process.client) {
      const token = localStorage.getItem('token')
      const user = localStorage.getItem('user')
      if (user && token) {
        commit('SET_USER', user)
        commit('SET_TOKEN', token)
      }
    }
  }
}

export const mutations = {
  SET_SIGN_IN (state, data) {
    state.name = data.dataUser.first_name
  },
  SET_USER (state, data) {
    state.session.user = data
  },
  SET_TOKEN (state, data) {
    state.session.token = data
  },
  SET_LOGOUT (state) {
    state.session.user = {}
    state.session.token = ''
    state.name = ''
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }
}
