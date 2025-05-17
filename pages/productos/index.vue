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
                <div v-for="categoria in listCategories" :key="categoria.cat_id" :class="showCategoriesFilter ? 'show-categories': 'disguise-categories'">
                  <p>
                    {{ categoria.cat_name }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container__list-product">
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
                <div class="product">
                  <div class="product__price">
                    <div class="product__price__text">
                      <span class="regular">Precio Regular</span>
                      <span class="offer">Precio Oferta</span>
                    </div>
                    <div class="product__price__money">
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
  data () {
    return {
      pagina: true,
      showCategoriesFilter: true
    }
  },
  computed: {
    ...mapState('home', {
      listProducts: 'listProducts'
    }),
    ...mapState('home', {
      listCategories: 'listCategories'
    })
  },
  created () {
    const payload = this.$route.path === '/'
    this.categoryList = this.$store.dispatch('home/loadCategories', payload)

    this.$store.dispatch('home/loadProducts')
  },
  methods: {
    getSeeCategoeries () {
      this.showCategoriesFilter = !this.showCategoriesFilter
    }
  }
}
</script>
