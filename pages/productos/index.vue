<template>
  <div>
    <CommonHeader />
    <div id="page-products">
      <h1 class="title-principal">
        Lista de Productos
      </h1>
      <div class="container">
        <div class="container__filter">
          <h5 class="title">
            Filtros de productos
          </h5>
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
          <div class="filtro_price">
            <p class="filtro_price__title">
              Filtrar Por Precio
            </p>
            <div class="filtro_price__body">
              <div class="input-number">
                <input class="cont-input" type="number" v-model.number="priceRange[0]" :min="min" :max="priceMax" />
                <input class="cont-input" type="number" v-model.number="priceRange[1]" :min="priceMin" :max="max" />
              </div>
              <!-- Slider Vue -->
              <client-only>
                <div class="input-range">
                  <vue-slider
                    v-model="priceRange"
                    class="slider"
                    :min="min"
                    :max="max"
                    :dot-size="16"
                    :height="6"
                    :interval="10"
                    :tooltip="'hover'"
                    :lazy="true"
                    :enable-cross="false"
                    :contained="true"
                    :process-style="{ backgroundColor: '#E53935' }"
                    :rail-style="{ backgroundColor: '#ccc' }"
                    :data="null"
                    :dot-options="[{ style: { backgroundColor: '#E53935' } }, { style: { backgroundColor: '#E53935' } }]"
                    :direction="'ltr'"
                    :piecewise="true"
                    :piecewise-label="true"
                    :tooltip-style="{ backgroundColor: '#E53935', borderColor: '#E53935' }"
                    :value="priceRange"
                    :use-keyboard="true"
                    :width="'100%'"
                    :reverse="false"
                    :disabled="false"
                    :event-type="'auto'"
                    :drag-on-click="true"
                    :real-time="true"
                    :debounce-time="0"
                    :max-range="null"
                    :min-range="10"
                  />
                </div>
              </client-only>
              <div>
                <button @click="callFilterProduct">
                  Filtrar
                </button>
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
  data () {
    return {
      pagina: true,
      showCategoriesFilter: true,
      min: 0,
      max: 1000,
      priceMin: 100,
      priceMax: 800,
      priceRange: [100, 800],
      categorySelect: 0
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
      const payload = {
        category: idCategory
      }
      this.categorySelect = idCategory
      this.$store.dispatch('products/loadProductByCategory', payload)
    },
    callFilterProduct () {
      let payload = {
        category: '',
        min: this.priceRange[0],
        max: this.priceRange[1]
      }

      if (this.categorySelect > 0) {
        payload = {
          category: this.categorySelect,
          min: this.priceRange[0],
          max: this.priceRange[1]
        }
      }

      this.$store.dispatch('products/loadProductByCategory', payload)
    }
  }
}
</script>
