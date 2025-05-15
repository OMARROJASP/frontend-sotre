export const state = () => ({
  listCategories: [],
  listProducts: []
})

export const actions = {
  async loadCategories ({ commit }, payload) {
    try {
      const response = await this.$axios.$get('category')

      // Verificar si hay datos
      if (!response.data || response.data.length === 0) {
        console.warn('No hay categorías disponibles')
        return []
      }

      // Procesar datos según el payload
      const categoriesToCommit = payload
        ? response.data.slice(0, Math.min(response.data.length, 4))
        : response.data
      console.log(categoriesToCommit)
      commit('setListCategories', categoriesToCommit)
      return categoriesToCommit
    } catch (e) {
      console.error('Error fetching categories:', e)
      commit('setListCategories', []) // Limpiar el estado en caso de error
      throw e
    }
  },
  async loadProducts ({ commit }) {
    try {
      const response = await this.$axios.$get('product')
      commit('setListProducts', response.data)
    } catch (e) {
      commit('setListProducts', []) // Limpiar el estado en caso de error
      throw e
    }
  }

}
export const mutations = {
  setListCategories (state, data) {
    state.listCategories = data
  },
  setListProducts (state, products) {
    state.listProducts = products
  }
}
