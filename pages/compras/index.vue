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
                  <button @click="getQuentyPluss(index, producto.product.quenty)">
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
import { mapState } from 'vuex'
import CommonHeader from '~/components/common/CommonHeader.vue'

export default {
  name: 'CarritoCompras',
  components: {
    CommonHeader
  },
  data () {
    return {
      countProducts: 0,
      quenty: 1,
      subTotal: 0,
      productos: [
        {
          prod_id: 1,
          prod_name: 'zapatillas xd Adidas',
          prod_count: 2,
          prod_subtotal: 120.0
        },
        {
          prod_id: 2,
          prod_name: 'zapatillas de nylon Adidas 2',
          prod_count: 1,
          prod_subtotal: 30.0
        },
        {
          prod_id: 3,
          prod_name: 'zapatillas extermas de  Adidas 3',
          prod_count: 1,
          prod_subtotal: 29.90
        },
        {
          prod_id: 14,
          prod_name: ' Adidas 2',
          prod_count: 1,
          prod_subtotal: 30.00
        },
        {
          prod_id: 15,
          prod_name: 'zapatillas Adidas 3',
          prod_count: 1,
          prod_subtotal: 29.90
        }
      ],
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
    getQuentyPluss (data, dataQuenty) {
      if (dataQuenty > 0) {
        this.$store.commit('UPDATE_PRODUCT_QUENTY', { index: data, quenty: this.listProductByBuy[data].quenty++ })
      }
    },
    getQuentyMinus (data, dataQuenty) {
      if (dataQuenty > 1) {
        this.$store.commit('UPDATE_PRODUCT_QUENTY', { index: data, quenty: this.listProductByBuy[data].quenty-- })
      }
    },
    calculationSubtotal () {
      const total = this.listProductByBuy.reduce((acc, producto) => acc + Number(producto.product.prod_price), 0)
      this.subTotal = total.toFixed(2)
    }
  }
}
</script>
