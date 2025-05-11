<template>
  <div class="section">
    <div class="section__categories">
      <div class="title">
        <h2>
          {{ titulo }}
        </h2>
      </div>
      <div class="list-categories">
        <div v-for="categoria in listCategories" :key="categoria.cat_id" class="category">
          <div class="category__item">
            <h3 class="category__name">
              {{ categoria.cat_name }}
            </h3>
            <div class="category__image">
              <img :src="categoria.cat_imageUrl" alt="Imagen de la categoria" />
            </div>
          </div>
        </div>
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
      lugar: 'Lima',
      categoryList: []
    }
  },
  computed: {
    ...mapState('home', {
      listCategories: 'listCategories'
    })
  },
  created () {
    this.categoryList = this.$store.dispatch('home/loadCategories')
    console.log('Aqui esta categoria list:', this.categoryList)
  }

}
</script>
