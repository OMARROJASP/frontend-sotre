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
      priceRange: [0, 1000],
      categorySelect: 0,
      priceMin: 0,
      priceMax: 1000
    }
  },
  computed: {
    ...mapState('products', {
      listProducts: 'listProducts',
      min: 'min',
      max: 'max'
    }),
    ...mapState('home', {
      listCategories: 'listCategories'
    })
  },
  watch: {
    min (val) {
      if (typeof val === 'number' && typeof this.max === 'number') {
        this.priceMin = Math.floor(val)
        this.priceMax = Math.floor(this.max)
        this.priceRange = [this.priceMin, this.priceMax]
      }
    },
    max (val) {
      if (typeof val === 'number' && typeof this.min === 'number') {
        this.priceMin = Math.floor(this.min)
        this.priceMax = Math.floor(val)
        this.priceRange = [this.priceMin, this.priceMax]
      }
    }
  },
  created () {
    const payload = this.$route.path === '/'
    this.categoryList = this.$store.dispatch('home/loadCategories', payload)
    this.categorySelect = this.$route.query.category

    const payloadQuery = {
      category: this.$route.query.category
    }

    if (payloadQuery.category > 0) {
      this.$store.dispatch('products/loadProductByCategory', payloadQuery)
    } else {
      this.$store.dispatch('products/loadProducts')
    }

    // Ya puedes asignar priceRange aquí si lo prefieres
    if (this.min != null && this.max != null) {
      this.priceRange = [this.min, this.max]
    }
  },
  methods: {
    getSeeCategoeries () {
      this.showCategoriesFilter = !this.showCategoriesFilter
    },
    callProductsByCategory (idCategory) {
      this.priceRange = [0, 1000]
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
      console.log('envio de payload', payload)
      this.$store.dispatch('products/loadProductByCategory', payload)

      this.priceRange = (typeof this.min === 'number' && typeof this.max === 'number')
        ? [this.min, this.max]
        : [0, 1000]
    }
  }
}
</script>
