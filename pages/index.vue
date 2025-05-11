<template>
  <div>
    <CommonHeader />
    <div>
      <CarrucelHome />
      <div class="intro">
        Hola, <span>FULANITO</span>
        <br/>
        Bienvenido a Rukanas Store
      </div>
      <hr class="division"/>
      <div>
        <CategoriaHome titulo="Categoria" ref=""/>
      </div>
      <div>
        <CarrucelOferta titulo="Oferta" />
      </div>
      <div>
      </div>
    </div>
    <CommonFooter />
  </div>
</template>

<script>
import CommonHeader from '@/components/common/CommonHeader.vue'
import CommonFooter from '@/components/common/CommonFooter.vue'
import CarrucelHome from '@/components/home/Carrucel.vue'
import CarrucelOferta from '@/components/common/CommonCarrucelv2.vue'
import CategoriaHome from '@/components/home/Categoria.vue'
export default {
  name: 'IndexPage',
  components: {
    CommonHeader,
    CommonFooter,
    CarrucelHome,
    CarrucelOferta,
    CategoriaHome
  },
  data () {
    return {
      lugar: 'Lima'
    }
  }

}

</script>
<style>

</style>
