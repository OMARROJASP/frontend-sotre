<template>
  <div>
    <CommonHeader />
    <div id="page-carrito">
      <p class="title-principal">
        Mi Carritito (2)
      </p>
      <div class="container">
        <div class="list-buy">
          <!-- Name Store-->
          <div class="list-buy__title">
            <p>
              Rukanas Store
            </p>
          </div>
          <!-- Encabezado de la tabla -->
          <div class="list-buy__head">
            <div>
              <p>Id</p>
            </div>
            <div>
              <p>Producto</p>
            </div>
            <div>
              <p>Cantidad</p>
            </div>
            <div>
              <p>SubTotal</p>
            </div>
            <div>
              <p></p>
            </div>
          </div>
          <!-- Body de la tabla-->
          <div class="list-buy__body">
            <div v-if="listProductByBuy.length > 0">
              <div v-for="(orderDetalle, index) in listProductByBuy" :key="index" class="data-product">
                <div>
                  <p>{{ index +1 }}</p>
                </div>
                <div>
                  <p>{{ orderDetalle.ord_det_product.prod_name }}</p>
                </div>
                <div class="data-product__count">
                  <button @click="getQuentyMinus(index, orderDetalle.ord_det_quantity)">
                    <font-awesome-icon :icon="['fas','minus']" size="2xs" style="color: #fff;" />
                  </button>
                  <p>{{ orderDetalle.ord_det_quantity }}</p>
                  <button @click="getQuentyPluss(index, orderDetalle.ord_det_quantity)">
                    <font-awesome-icon :icon="['fas','plus']" size="2xs" style="color: #fff;" />
                  </button>
                </div>
                <div>
                  <p>s/. {{ orderDetalle.ord_det_unit_price }}</p>
                </div>
                <div class="data-product__delete" @click="deleteProductByList(orderDetalle.ord_det_product_id)">
                  <p>Eliminar</p>
                </div>
              </div>
            </div>
            <div v-else class="list-buy__body__null">
              No hay productos en el carrito
            </div>
          </div>
        </div>
        <!-- Resumen de la compra -->
        <div class="summary-buy">
          <div class="summary-buy__title">
            <p>Resumen de compras</p>
          </div>
          <div class="summary-buy__subtotal">
            <div>
              Subtotal
            </div>
            <div>
              {{ subTotal }}
            </div>
          </div>
          <div class="summary-buy__info">
            <div>
              Oferta
            </div>
            <div>
              {{ subTotal }}
            </div>
          </div>
          <div class="summary-buy__info">
            <div>
              Total
            </div>
            <div>
              {{ subTotal }}
            </div>
          </div>
          <div class="summary-buy__buy">
            <button @click="buyProducts()">
              Pagar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import CommonHeader from '~/components/common/CommonHeader.vue'

export default {
  name: 'CarritoCompras',
  components: {
    CommonHeader
  },
  middleware: 'auth',
  props: {
    size: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      subTotal: 0
    }
  },
  computed: {
    ...mapState('cart', {
      listProductByBuy: 'listProductByBuy'
    }),
    ...mapState('login', {
      session: 'session'
    }),
    user () {
      return this.$store.state.user
    }
  },
  async created () {
    this.calculationSubtotal()

    if (this.user && this.user.first_name) {
      console.log('se llamo al carrito')
      await this.$store.dispatch('cart/getListProductsByCard')
    } else {
      console.log('No ha iniciado sescion')
    }
    console.log('Aqui esta la lista de :', this.listProductByBuy)

    // const idUser = 6
    // await this.$store.dispatch('cart/getListProductsByCard', idUser)

    // try {
    //   if (this.session?.user?.id_user) {
    //   // Obtenemos productos del carrito del usuario logueado
    //     const idUser = 6
    //     await this.$store.dispatch('cart/getListProductsByCard', idUser)

    //     // Calculamos el subtotal después de haber cargado los productos
    //     // this.calculationSubtotal()
    //   } else {
    //     console.warn('No hay usuario en sesión')
    //   }
    // } catch (error) {
    //   console.error('Error al cargar los productos del carrito:', error)
    // }
  },
  methods: {
    ...mapActions('cart', ['updateProductQuantity', 'deleteProduct', 'getListProductsByCard', 'buyProductByCard']),

    getQuentyPluss (index, dataQuenty) {
      // const currentQyt = this.$store.state.cart.listProductByBuy[index].quenty
      this.updateProductQuantity({ index, quantity: dataQuenty + 1 })
    },
    getQuentyMinus (index, dataQuenty) {
      if (dataQuenty > 1) {
        this.updateProductQuantity({ index, quantity: dataQuenty - 1 })
      }
    },
    calculationSubtotal () {
      const total = this.listProductByBuy.reduce((acc, producto) => acc + Number(producto.ord_det_subtotal), 0)
      this.subTotal = total.toFixed(2)
    },
    deleteProductByList (data) {
      this.deleteProduct(data)
    },
    buyProducts () {
      const valor = this.buyProductByCard()
      if (valor) {
        this.$router.push('/')
      }
    }
  }
}
</script>
