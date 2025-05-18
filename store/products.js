export const state = () => ({
  product: [],
  listProducts: []
})

export const actions = {

  async loadProduct ({ commit }, payload) {
    try {
      const response = await this.$axios.$get(`product/${payload}`)
      commit('SET_DETALLE_PRODUCT', response.data)
    } catch (e) {
      commit('SET_DETALLE_PRODUCT', []) // Limpiar el estado en caso de error
      throw e
    }
  },
  async loadProducts ({ commit }) {
    try {
      const response = await this.$axios.$get('product')
      commit('SET_LIST_PRODUCTS', response.data)
    } catch (e) {
      commit('SET_LIST_PRODUCTS', []) // Limpiar el estado en caso de error
      throw e
    }
  },

  async loadProductByCategory ({ commit }, payload) {
    try {
      const response = await this.$axios.$get('product/filtroByCategory', {
        params: {
          category: payload
        }
      })
      commit('SET_PRODUCTS_BY_CATEGORY', response.data)
    } catch (e) {
      commit('SET_PRODUCTS_BY_CATEGORY', []) // Limpiar el estado en caso de error
      throw e
    }
  }

}
export const mutations = {
  SET_DETALLE_PRODUCT (state, data) {
    state.product = data
  },
  SET_PRODUCTS_BY_CATEGORY (state, data) {
    state.listProducts = data
  },
  SET_LIST_PRODUCTS (state, data) {
    state.listProducts = data
  }
}
