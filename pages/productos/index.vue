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
                <input class="cont-input" type="number" v-model.number="priceRange[0]" :min="min" :max="max" />
                <input class="cont-input" type="number" v-model.number="priceRange[1]" :min="min" :max="max" />
              </div>
              <!-- Slider Vue -->
              <client-only>
                <div class="input-range">
                  <vue-slider
                    v-if="priceRange && priceRange.length === 2"
                    v-model="priceRange"
                    class="slider"
                    :min="priceMin"
                    :max="priceMax"
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
                    :key="`slider-${priceMin}-${priceMax}`"
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
          <div class="container__list-product__sup">
            <div v-show="listProducts.length === 0">
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
          <div class="container__list-product__inf">
            <div class="botones">
              <button :disabled="page <= 1" class="btn" @click="callFilterProduct(page - 1)">
                prev
              </button>
              <p class="page">
                {{ page }}
              </p>
              <button :disabled="page >= totalPages" class="btn" @click="callFilterProduct(page + 1)">
                next
              </button>
            </div>
          </div>
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
      pageProducts: 1,
      limitProducts: 2,
      showCategoriesFilter: true,
      priceRange: [0, 500],
      categorySelect: 0,
      priceMin: 0,
      priceMax: 500
    }
  },
  computed: {
    ...mapState('products', {
      listProducts: 'listProducts',
      min: 'min',
      max: 'max',
      page: 'page',
      itemsPerPage: 'itemsPerPage',
      totalPages: 'totalPages'
    }),
    ...mapState('home', {
      listCategories: 'listCategories'
    })
  },
  async created () {
    try {
      const payload = this.$route.path === '/'
      const categories = await this.$store.dispatch('home/loadCategories', payload)
      this.categoryList = categories

      this.categorySelect = this.$route.query.category || 0

      const payloadQuery = {
        category: this.categorySelect,
        page: 1,
        limit: this.limitProducts
      }

      await this.$store.dispatch('products/loadProductByCategory', payloadQuery)
      // const { min, max } = this.$store.state.products
      // if (min != null && max != null) {
      //   this.priceMin = Math.floor(min)
      //   this.priceMax = Math.floor(max) + 2
      //   this.priceRange = [this.priceMin, this.priceMax]
      // }
    } catch (error) {
      console.error('Error en created:', error)
      this.priceRange = [0, 100] // Valores por defecto
    }
  },
  methods: {
    getSeeCategoeries () {
      this.showCategoriesFilter = !this.showCategoriesFilter
    },
    callProductsByCategory (idCategory) {
      const payload = {
        category: idCategory,
        page: this.page || 1,
        limit: this.limit || this.limitProducts
      }
      this.categorySelect = idCategory
      this.$store.dispatch('products/loadProductByCategory', payload)
    },
    async callFilterProduct (currentPage = 1) {
      const pageAux = currentPage >= 1 ? currentPage : this.page
      let payload = {
        category: '',
        min: this.priceRange[0],
        max: this.priceRange[1],
        page: pageAux,
        limit: this.limit || this.limitProducts
      }

      if (this.categorySelect > 0) {
        payload = {
          category: this.categorySelect,
          min: this.priceRange[0],
          max: this.priceRange[1],
          page: pageAux,
          limit: this.limit || this.limitProducts
        }
      }
      try {
        const response = await this.$store.dispatch('products/loadProductByCategory', payload)

        // Actualiza min/max SOLO si el backend los devuelve
        if (response?.min !== undefined && response?.max !== undefined) {
          this.priceMin = Math.floor(response.min)
          this.priceMax = Math.floor(response.max)
          // Ajusta priceRange para que no exceda los nuevos límites
          this.priceRange = [
            Math.max(this.priceMin, this.priceRange[0]), // No menor que el nuevo mínimo
            Math.min(this.priceMax, this.priceRange[1])// No mayor que el nuevo máximo
          ]
        }
        this.priceRange = [0, 500]
      } catch (error) {
        console.error('Error al filtrar:', error)
      }
    }
  }
}
</script>
