export const state = () => ({
  user: {}
})

export const actions = {

  async registerUser ({ commit }, payload) {
    try {
      const response = await this.$axios.$post('/auth/register', payload)
      commit('SET_REGISTER_USER', response)
      localStorage.setItem('token', response.token)
      localStorage.setItem('user', JSON.stringify(response.dataUser))
      return true
    } catch (e) {
      console.log('el error es :', e)
      throw e
    }
  }
}

export const mutations = {
  SET_REGISTER_USER (state, data) {
    state.user = data.dataUser.first_name
  }
}
