<template>
  <div>
    <CommonHeader />
    <div id="page-products">
      <h1 class="title-principal">
        Lista de Productos
      </h1>
      <div class="list-product">
        <nuxt-link v-for="producto in listProducts" :key="producto.prod_id" :to="`/productos/${producto.prod_id}`">
          <div class="product">
            <div class="product__title">
              <h3>
                {{ producto.prod_name }}
              </h3>
            </div>
            <div class="product__body">
              <img :src="producto.prod_imageUrl" alt="Imagen de la producto">
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import CommonHeader from '@/components/common/CommonHeader.vue'

export default {
  name: 'ProductsPage',
  components: {
    CommonHeader
  },
  data () {
    return {
      pagina: true
    }
  },
  computed: {
    ...mapState('home', {
      listProducts: 'listProducts'
    })
  },
  created () {
    this.$store.dispatch('home/loadProducts')
  }
}
</script>
