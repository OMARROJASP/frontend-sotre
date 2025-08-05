export const state = () => ({
  listCategories: [],
  listProducts: [],
  banners: []
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
      commit('setListCategories', categoriesToCommit)
      return categoriesToCommit
    } catch (e) {
      console.error('Error fetching categories:', e)
      commit('setListCategories', []) // Limpiar el estado en caso de error
      throw e
    }
  },

  async loadBanners ({ commit }) {
    try {
      const response = await this.$axios.$get('banner')

      if (!response.data || response.data.length === 0) {
        console.warn('No hay banners disponibles')
        return []
      }
      commit('setListBanners', response.data)
    } catch (error) {
      console.error('Error fetching banners:', error)
      commit('setListBanners', []) // Limpiar el estado en caso de error
      throw error
    }
  }

}

export const mutations = {
  setListCategories (state, data) {
    state.listCategories = data
  },
  setListProducts (state, products) {
    state.listProducts = products
  },
  setListBanners (state, banners) {
    state.banners = banners
  }
}
