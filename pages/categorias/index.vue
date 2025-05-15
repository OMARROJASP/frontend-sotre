<template>
  <div>
    <CommonHeader />
    <CategoriaPage titulo="Todas las categorias" />
  </div>
</template>
<script>
import CategoriaPage from '@/components/home/Categoria.vue'
import CommonHeader from '@/components/common/CommonHeader.vue'
export default {
  name: 'CategoryPage',
  components: {
    CategoriaPage,
    CommonHeader
  }

}
</script>
