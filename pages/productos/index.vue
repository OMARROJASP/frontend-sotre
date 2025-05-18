<template>
  <div>
    <CommonHeader />
    <div id="page-products">
      <h1 class="title-principal">
        Lista de Productos
      </h1>
      <div class="container">
        <div class="container__filter">
          <h5 class="title">Filtros de productos</h5>
          <div class="list-category">
            <p class="list-category__title" @click="getSeeCategoeries()">
              Todas las categorias
            </p>
            <div class="list-category__body">
              <div :class="showCategoriesFilter ? 'activo': 'desactivado'">
                <div v-for="categoria in listCategories" :key="categoria.cat_id" class="show-categories">
                  <p @click="callProductsByCategory(categoria.cat_id)">
                    {{ categoria.cat_name }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container__list-product">
          <div v-show="listProducts.length == 0">
            No hay productos con ese filtro
          </div>
          <nuxt-link v-for="producto in listProducts" :key="producto.prod_id" :to="`/productos/${producto.prod_id}`">
            <div class="product">
              <div class="product__body">
                <img :src="producto.prod_imageUrl" alt="Imagen de la producto">
              </div>
              <div>
                <div class="product__title">
                  <h3>
                    {{ producto.prod_name }}
                  </h3>
                </div>
                <div class="product_section">
                  <div class="product_section__price">
                    <div class="product_section__price__text">
                      <span class="regular">Precio Regular</span>
                      <span class="offer">Precio Oferta</span>
                    </div>
                    <div class="product_section__price__money">
                      <span class="regular">S/ {{ producto.prod_price }}</span>
                      <span class="offer">S/ {{ producto.prod_price }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
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
  // async asyncData ({ query, store }) {
  //   const payload = query.category
  //   if (payload) {
  //     await store.dispatch('products/loadProductByCategory', payload)
  //   }
  //   return {}
  // },
  data () {
    return {
      pagina: true,
      showCategoriesFilter: true
    }
  },
  computed: {
    ...mapState('products', {
      listProducts: 'listProducts'
    }),
    ...mapState('home', {
      listCategories: 'listCategories'
    })
  },
  created () {
    const payload = this.$route.path === '/'
    this.categoryList = this.$store.dispatch('home/loadCategories', payload)

    const payloadQuery = this.$route.query.category

    if (payloadQuery > 0) {
      this.$store.dispatch('products/loadProductByCategory', payloadQuery)
    } else {
      this.$store.dispatch('products/loadProducts')
    }
  },
  methods: {
    getSeeCategoeries () {
      this.showCategoriesFilter = !this.showCategoriesFilter
    },
    callProductsByCategory (idCategory) {
      const payload = idCategory
      this.$store.dispatch('products/loadProductByCategory', payload)
    }
  }
}
</script>
