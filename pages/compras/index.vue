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
            <div>
              <div v-for="(producto, index) in listProductByBuy" :key="producto.product.prod_id" class="data-product">
                <div>
                  <p>{{ index +1 }}</p>
                </div>
                <div>
                  <p>{{ producto.product.prod_name }}</p>
                </div>
                <div class="data-product__count">
                  <button @click="getQuentyMinus(index, producto.quenty)">
                    <font-awesome-icon :icon="['fas','minus']" size="2xs" style="color: #fff;" />
                  </button>
                  <p>{{ producto.quenty }}</p>
                  <button @click="getQuentyPluss(index, producto.quenty)">
                    <font-awesome-icon :icon="['fas','plus']" size="2xs" style="color: #fff;" />
                  </button>
                </div>
                <div>
                  <p>s/. {{ producto.product.prod_price }}</p>
                </div>
                <div class="data-product__delete">
                  <p>Eliminar</p>
                </div>
              </div>
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
              {{ total.subTotal }}
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
            <button>
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
      countProducts: 0,
      quenty: 1,
      subTotal: 0,
      total: {
        subTotal: 250.00,
        total: 250.00
      }
    }
  },
  computed: {
    ...mapState('cart', {
      listProductByBuy: 'listProductByBuy'
    })
  },
  created () {
    this.calculationSubtotal()
  },
  methods: {
    ...mapActions('cart', ['updateProductQuenty']),

    getQuentyPluss (index, dataQuenty) {
      const currentQyt = this.$store.state.cart.listProductByBuy[index].quenty
      this.updateProductQuenty({ index, quenty: currentQyt + 1 })
    },
    getQuentyMinus (index, dataQuenty) {
      if (dataQuenty > 1) {
        this.updateProductQuenty({ index, quenty: dataQuenty - 1 })
      }
    },
    calculationSubtotal () {
      const total = this.listProductByBuy.reduce((acc, producto) => acc + Number(producto.product.prod_price), 0)
      this.subTotal = total.toFixed(2)
    }
  }
}
</script>
