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
      const params = {}

      if (payload.category) {
        params.category = payload.category
      }

      if (payload.min != null) {
        params.min = payload.min
      }

      if (payload.max != null) {
        params.max = payload.max
      }

      console.log('Aqui esta el payload', params)

      const response = await this.$axios.$get('product/filtro', {
        params
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
