export const state = () => ({
  product: [],
  listProducts: [],
  min: 0,
  max: 0,
  page: 1,
  itemsPerPage: 1
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
      commit('SET_LIST_PRODUCTS', response.data.product)
      return response.data
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

      params.page = payload.page
      params.limit = payload.limit

      console.log('Aqui esta el params', params)

      const response = await this.$axios.$get('product/filtro', {
        params
      })
      commit('SET_PRODUCTS_BY_CATEGORY', response.data)
      return response.data
    } catch (e) {
      commit('SET_CLEAN_FILTRO', [])
      throw e
    }
  }

}
export const mutations = {
  SET_DETALLE_PRODUCT (state, data) {
    state.product = data
  },
  SET_PRODUCTS_BY_CATEGORY (state, data) {
    state.listProducts = data.products
    state.min = data.priceRange.min
    state.max = data.priceRange.max
    state.page = data.pagination.currentPage
    state.itemsPerPage = data.pagination.itemsPerPage
  },
  SET_CLEAN_FILTRO (state, data) {
    state.listProducts = data
  },
  SET_LIST_PRODUCTS (state, data) {
    state.listProducts = data
  }
}
