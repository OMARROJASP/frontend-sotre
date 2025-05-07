<template>
  <div>
    <CommonHeader />
    <div>
      <CarrucelHome />
      <div>
        Hola, FULANITO
        <br/>
        Bienvenido a Rukanas Store
      </div>
      <div>
        <CarrucelOferta />
      </div>
    </div>
    <CommonFooter />
  </div>
</template>

<script>
import CommonHeader from '@/components/common/CommonHeader.vue'
import CommonFooter from '@/components/common/CommonFooter.vue'
import CarrucelHome from '@/components/home/Carrucel.vue'
import CarrucelOferta from '@/components/common/CommonCarrucel.vue'
export default {
  name: 'IndexPage',
  components: {
    CommonHeader,
    CommonFooter,
    CarrucelHome,
    CarrucelOferta
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
