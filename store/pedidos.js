export const state = () => ({
  pedidos: {}
})

export const actions = {
  async ordersForUser ({ commit }) {
    try {
      const response = await this.$axios.$get('/order/all/6')
      // no olvidar cambiar el id de usuario
      // No olvidar que cuando trae los datos, no deberia traer todos los datos el user

      if (!response.ok) {
        console.error('No se actualizo correctamente')
      }
      commit('SET_ORDERS_USER', response.data)
      return true
    } catch (e) {
      console.log('el error es :', e)
      throw e
    }
  }
}

export const mutations = {
  SET_ORDERS_USER (state, data) {
    state.pedidos = data
  }
}
