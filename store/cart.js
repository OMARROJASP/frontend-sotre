export const state = () => ({
  listProductByBuy: []
})

export const mutations = {
  SET_LIST_PRODUCTS_BUY (state, data) {
    state.listProductByBuy = data
  },
  UPDATE_PRODUCT_QUENTY (state, { index, quenty }) {
    if (state.listProductByBuy[index]) {
      state.listProductByBuy[index].quenty = quenty
    }
  },
  PLUSS_PRODUCT (state, data) {
    if (state.listProductByBuy[data.id]) {
      state.listProductByBuy[data.id].quenty += data.quenty
    }
  },
  DELETE_PRODUCT (state, data) {
    state.listProductByBuy = data
  }
}

export const actions = {
  addProduct ({ state, commit }, data) {
    // Evita modificar el array original directamente
    const updatedList = [...state.listProductByBuy, data]

    const index = state.listProductByBuy.findIndex(
      prod => prod.product.prod_id === data.product.prod_id
    )

    //  Aquí puedes usar commit según el resultado
    if (index === -1) {
      commit('SET_LIST_PRODUCTS_BUY', updatedList)
    } else {
      // Si ya existe, podrías actualizar cantidad u otra lógica
      const payload = {
        id: index,
        quenty: data.quenty
      }
      commit('PLUSS_PRODUCT', payload)
    }
  },
  updateProductQuenty ({ commit }, { index, quenty }) {
    commit('UPDATE_PRODUCT_QUENTY', { index, quenty })
  },
  deleteProduct ({ state, commit }, data) {
    console.log('datos del arreglo', state.listProductByBuy)
    console.log('id de la lista', data)

    const updatedList = state.listProductByBuy.filter(
      item => item.product.prod_id !== data
    )
    console.log('ingreso', updatedList)
    commit('DELETE_PRODUCT', updatedList) // ✅ Usa la mutación correcta
  }
}
