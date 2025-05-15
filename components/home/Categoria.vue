<template>
  <div class="section">
    <div class="section__categories">
      <div class="title">
        <h2>
          {{ titulo }}
        </h2>
      </div>
      <div class="list-categories">
        <nuxt-link v-for="categoria in listCategories" :key="categoria.cat_id" class="category" to="/productos">
          <div class="category__item">
            <h3 class="category__name">
              {{ categoria.cat_name }}
            </h3>
            <div class="category__image">
              <img :src="categoria.cat_imageUrl" alt="Imagen de la categoria">
            </div>
          </div>
        </nuxt-link>
      </div>
      <div v-show="showComponent">
        <nuxt-link to='/categorias'>
          Ver más categorias
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'CategoriaHome',
  props: {
    titulo: {
      type: String,
      default: 'Categoria'
    }
  },
  data () {
    return {
      pagina: false,
      newCategories: []
    }
  },
  computed: {
    ...mapState('home', {
      listCategories: 'listCategories'
    }),
    showComponent () {
      return this.$route.path === '/'
    }
  },
  created () {
    const payload = this.$route.path === '/'
    this.categoryList = this.$store.dispatch('home/loadCategories', payload)
  },
  methods: {
    goToCategorias () {
      this.$router.push('/categorias')
    }
  }

}
</script>
