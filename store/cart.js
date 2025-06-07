export const state = () => ({
  listProductByBuy: [],
  orderId: null // Aquí puedes guardar el ID del pedido si es necesario
  // listProductByBuyAux: [] // Nos ayudara a guardar los productos que se compraron

})

export const mutations = {
  SET_LIST_PRODUCTS_BUY (state, data) {
    console.log('SET_LIST_PRODUCTS_BUY_data', data)
    state.orderId = data.ord_id // Guardar el ID del pedido
    state.listProductByBuy = data.orderDetails
    console.log('SET_LIST_PRODUCTS_BUY', state.listProductByBuy)
  },
  UPDATE_PRODUCT_QUENTY (state, { index, quenty }) {
    if (state.listProductByBuy[index]) {
      state.listProductByBuy[index].ord_det_quantity = quenty
    }
  },
  PLUSS_PRODUCT (state, data) {
    if (state.listProductByBuy[data.id]) {
      state.listProductByBuy[data.id].quenty += data.quenty
    }
    console.log('PLUSS_PRODUCT', state.listProductByBuy)
  },
  DELETE_PRODUCT (state, data) {
    state.listProductByBuy = data
  }
}

export const actions = {
  addProduct ({ state, commit }, data) {
    // Agregar el order Id
    data.ord_det_order_id = state.orderId

    // Evita modificar el array original directamente
    const updatedList = [...state.listProductByBuy, data]
    console.log('addProduct_data', data)
    console.log('addProduct_updatedList', updatedList)

    const index = state.listProductByBuy.findIndex(
      ord => ord.ord_det_product_id === data.ord_det_product_id
    )

    //  Aquí puedes usar commit según el resultado
    if (index === -1) {
      commit('SET_LIST_PRODUCTS_BUY', updatedList)
    } else {
      // Si ya existe, podrías actualizar cantidad u otra lógica
      const payload = {
        id: index,
        quenty: data.ord_det_quantity
      }
      commit('PLUSS_PRODUCT', payload)
    }
  },
  updateProductQuenty ({ commit }, { index, quenty }) {
    commit('UPDATE_PRODUCT_QUENTY', { index, quenty })
  },
  deleteProduct ({ state, commit }, data) {
    const updatedList = state.listProductByBuy.filter(
      item => item.product.prod_id !== data
    )
    commit('DELETE_PRODUCT', updatedList) // ✅ Usa la mutación correcta
  },
  async getListProductsByCard ({ commit }) {
    // la data es el id del usuario para obtener sus productos del carrito
    const response = await this.$axios.$get('order/full')
    commit('SET_LIST_PRODUCTS_BUY', response.data)
  }
}
