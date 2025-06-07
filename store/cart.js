export const state = () => ({
  listProductByBuy: [],
  orderId: null
})

export const mutations = {
  SET_LIST_PRODUCTS_BUY (state, data) {
    console.log('SET_LIST_PRODUCTS_BUY_data', data)
    console.log('Aqui esta el id del Order', data.ord_id)
    state.orderId = data.ord_id || null
    state.listProductByBuy = Array.isArray(data.orderDetails) ? data.orderDetails : []
    console.log('SET_LIST_PRODUCTS_BUY', state.listProductByBuy)
  },

  UPDATE_PRODUCT_QUANTITY (state, { index, quantity }) {
    if (state.listProductByBuy[index]) {
      console.log('El valor del producto: ', state.listProductByBuy[index])
      console.log('La cantidad del producto: ', quantity)
      state.listProductByBuy[index].ord_det_quantity = quantity
    }
  },

  INCREMENT_PRODUCT_QUANTITY (state, { index, quantity }) {
    if (state.listProductByBuy[index]) {
      state.listProductByBuy[index].ord_det_quantity += quantity
    }
  },

  DELETE_PRODUCT (state, updatedList) {
    state.listProductByBuy = updatedList
  }
}

export const actions = {
  addProduct ({ state, commit }, newProduct) {
    newProduct.ord_det_order_id = state.orderId
    console.log('addProduct', state.listProductByBuy)
    const existingIndex = state.listProductByBuy.findIndex(
      item => item.ord_det_product_id === Number(newProduct.ord_det_product_id)
    )

    if (existingIndex === -1) {
      const updatedList = [...state.listProductByBuy, newProduct]
      commit('SET_LIST_PRODUCTS_BUY', { ord_id: state.orderId, orderDetails: updatedList })
    } else {
      commit('INCREMENT_PRODUCT_QUANTITY', {
        index: existingIndex,
        quantity: newProduct.ord_det_quantity
      })
    }
  },

  updateProductQuantity ({ commit }, { index, quantity }) {
    commit('UPDATE_PRODUCT_QUANTITY', { index, quantity })
  },

  deleteProduct ({ state, commit }, productId) {
    const updatedList = state.listProductByBuy.filter(
      item => item.ord_det_product_id !== productId
    )
    commit('DELETE_PRODUCT', updatedList)
  },

  async getListProductsByCard ({ state, commit }) {
    if (state.listProductByBuy) {
      console.log('Ya se han cargado los productos del carrito, no es necesario volver a cargar.')
      return
    }
    try {
      const response = await this.$axios.$get('order/full')
      if (response?.data) {
        commit('SET_LIST_PRODUCTS_BUY', response.data)
      } else {
        console.warn('No se encontraron datos en la respuesta de order/full')
      }
    } catch (error) {
      console.error('Error al obtener productos del carrito:', error)
    }
  }
}
