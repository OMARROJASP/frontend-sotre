<template>
  <div>
    <CommonHeader />
    <div id="page-product">
      <div class="container">
        <div class="content">
          <div class="content__img">
            <img :src="product.prod_imageUrl"/>
          </div>
          <div class="content__info">
            <!-- Name -->
            <div class="section__name">
              <h3>{{ product.prod_name }}</h3>
            </div>
            <!-- Price -->
            <div class="section__price">
              <div class="section__price__text">
                <span class="regular">Precio Regular</span>
                <span class="offer">Precio Oferta</span>
              </div>
              <div class="section__price__money">
                <span class="regular">S/ {{ product.prod_price }}</span>
                <span class="offer">S/ {{ product.prod_price }}</span>
              </div>
            </div>
            <!-- quenty and buy-->
            <div class="section__buy">
              <!-- Quenty-->
              <div class="section__buy__button-quenty">
                <button class="minus" @click="getQuenty(-1)">
                  <font-awesome-icon :icon="['fas','minus']" size="2xs" style="color: #fff;" />
                </button>
                <div class="quenty">
                  {{ quenty }}
                </div>
                <button class="plus" @click="getQuenty(1)">
                  <font-awesome-icon :icon="['fas','plus']" size="2xs" style="color: #fff;" />
                </button>
              </div>
              <!-- buy -->
              <button :disabled="product.prod_stock <= 0" class="section__buy__button-buy" @click="showPopUp = true; goBuyProduct(product, quenty) ">
                Comprar
              </button>
            </div>
            <!-- Stock-->
            <div class="section__stock" :class="product.prod_stock > 0?'section__stock__available':'section__stock__no-available'">
              {{ product.prod_stock?'Stock Disponible':'Stock No Disponible' }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <CommonPopUp id="popup-product" :visible="showPopUp" @close="showPopUp = false">
      <div class="container-pop-up">
        <h1 class="content-title">
          Producto Añadido con exito al carrito
        </h1>
        <div class="content-info">
          <div class="container-img">
            <div class="image">
              <img :src="product.prod_imageUrl">
            </div>
            <div class="quenty">
              {{ quenty }}
            </div>
          </div>
          <div>
            <h3>{{ product.prod_name }}</h3>
            <h5>{{ product.prod_price }}</h5>
          </div>
        </div>
        <div class="content-btn">
          <button @click="showPopUp = false">
            Ver más productos
          </button>
          <button @click="goBuy()">
            Ir a mi carrito
          </button>
        </div>
      </div>
    </CommonPopUp>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import CommonHeader from '~/components/common/CommonHeader.vue'
import CommonPopUp from '~/components/common/CommonPopUp.vue'

export default {
  name: 'ProductPage',
  components: {
    CommonHeader,
    CommonPopUp
  },
  data () {
    return {
      idProduct: '',
      quenty: 1,
      showPopUp: false
    }
  },
  computed: {
    ...mapState('products', {
      product: 'product'
    })
  },
  mounted () {
    this.idProduct = this.$route.params.slug
    this.$store.dispatch('products/loadProduct', this.idProduct)
  },
  methods: {
    getQuenty (data) {
      if (this.quenty > 0) {
        this.quenty += data
      } else {
        this.quenty = 1
      }
    },
    goBuyProduct (_product, _quenty) {
      const payload = {
        ord_det_discoun: 0,
        // ord_det_order_id: 2,
        ord_det_product: _product,
        ord_det_product_id: this.idProduct,
        ord_det_quantity: _quenty,
        ord_det_subtotal: _product.prod_price * _quenty,
        ord_det_unit_price: _product.prod_price
        // product: _product,
        // quenty: _quenty
      }
      this.$store.dispatch('cart/addProduct', payload)
    },
    goBuy () {
      this.$router.push('/compras')
    }
  }
}
</script>
