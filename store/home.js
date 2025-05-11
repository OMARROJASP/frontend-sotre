import axios from 'axios'

export const state = () => ({
  listCategories: [],
  listProducts: []
})

export const actions = {
  async loadCategories ({ commit }) {
    await axios.get('http://localhost:3001/category')
      .then((response) => {
        console.log('Categoriesxd1:', response.data)
        commit('setListCategories', response.data.data)
        return response.data.data
      })
      .catch((error) => {
        console.error('Error fetching categories:', error)
      })
  }
}
export const mutations = {
  setListCategories (state, data) {
    state.listCategories = data
    console.log('Categoria se guarda en el store:', state.listCategories)
  },
  setListProducts (state, products) {
    state.listProducts = products
  }
}
