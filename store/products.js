export const state = () => ({
  product: []
})

export const actions = {

  async loadProduct ({ commit }, payload) {
    try {
      const response = await this.$axios.$get(`product/${payload}`)
      console.log(response.data)
      commit('SET_DETALLE_PRODUCT', response.data)
    } catch (e) {
      commit('SET_DETALLE_PRODUCT', []) // Limpiar el estado en caso de error
      throw e
    }
  }

}
export const mutations = {
  SET_DETALLE_PRODUCT (state, data) {
    state.product = data
  }
}
