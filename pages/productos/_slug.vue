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
              <button class="section__buy__button-buy">Comprar</button>
            </div>
            <!-- Stock-->
            <div class="section__stock" :class="product.prod_stock > 0?'section__stock__available':'section__stock__no-available'">
              {{ product.prod_stock?'Stock Disponible':'Stock No Disponible' }}
            </div>
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
  name: 'ProductPage',
  components: {
    CommonHeader
  },
  data () {
    return {
      idProduct: '',
      quenty: 1
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
    }
  }
}
</script>
