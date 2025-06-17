export const state = () => ({
  listProductByBuy: [],
  order: {}
})

export const mutations = {
  SET_LIST_PRODUCTS_BUY (state, data) {
    state.order = data || null
    state.listProductByBuy = Array.isArray(data.orderDetails) ? data.orderDetails : []
  },

  UPDATE_PRODUCT_QUANTITY (state, { index, quantity }) {
    if (state.listProductByBuy[index]) {
      state.listProductByBuy[index].ord_det_quantity = quantity
    }
  },

  INCREMENT_PRODUCT_QUANTITY (state, { index, quantity }) {
    if (state.listProductByBuy[index]) {
      state.listProductByBuy[index].ord_det_quantity += quantity
    }
  },
  CLEAN_CART (state) {
    state.order = {}
    state.listProductByBuy = []
  },

  DELETE_PRODUCT (state, updatedList) {
    state.listProductByBuy = updatedList
  }
}

export const actions = {
  async addProduct ({ state, commit, dispatch }, newProduct) {
    await dispatch('getListProductsByCard')
    newProduct.ord_det_order_id = state.order.ord_id
    const existingIndex = state.listProductByBuy.findIndex(
      item => item.ord_det_product_id === Number(newProduct.ord_det_product_id)
    )

    if (existingIndex === -1) {
      const updatedList = [...state.listProductByBuy, newProduct]
      await this.$axios.$post('details', newProduct)
      console.log('Ingreso el dato a details')
      commit('SET_LIST_PRODUCTS_BUY', { ord_id: state.order.ord_id, orderDetails: updatedList })
    } else {
      console.log('No Ingreso el dato a details')
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
    if (state.listProductByBuy.length > 0) {
      console.log('Ya se han cargado los productos del carrito, no es necesario volver a cargar.', state.listProductByBuy)
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
  },

  async buyProductByCard ({ state, commit }) {
    if (!state.listProductByBuy.length > 0) {
      console.log('1')
      return
    }

    try {
      const newOrder = {
        ord_status: 'CREATED'
      }
      newOrder.ord_status = 'IN_PROGRESS'
      const response = await this.$axios.$put(`order/${state.order.ord_id}`, newOrder)
      if (response?.data) {
        commit('CLEAN_CART')
        return true
      } else {
        alert('Hubo problemas con la compra')
        return false
      }
    } catch (error) {
      console.error('Error al comprar el carrito de compra')
    }
  }
}
