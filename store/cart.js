// store/index.js

export const state = () => ({
  listProductByBuy: []
})

export const mutations = {
  SET_LIST_PRODUCTS_BUY (state, data) {
    state.listProductByBuy = data
    console.log('✅ Productos actualizados:', data)
  },
  UPDATE_PRODUCT_QUENTY (state, { index, quenty }) {
    console.log('Entro aqui', index)
    if (state.listProductByBuy[index]) {
      state.listProductByBuy[index].quenty = quenty
    }
  }
}

export const actions = {
  addProduct ({ state, commit }, product) {
    // Evita modificar el array original directamente
    const updatedList = [...state.listProductByBuy, product]
    commit('SET_LIST_PRODUCTS_BUY', updatedList)
  },
  updateProductQuenty ({ commit }, payload) {
    commit('UPDATE_PRODUCT_QUENTY', payload)
  }
}
