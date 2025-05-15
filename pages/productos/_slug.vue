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
            <h3>{{ product.prod_name }}</h3>
            <h4>{{ product.prod_description }}</h4>
            <h3>S/ {{ product.prod_price }}</h3>
            <h3>Stock {{ product.prod_stock }}</h3>
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
      idProduct: ''
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
  }
}
</script>
