<template>
  <div>
    <CommonHeader />
    <CarrucelHome />
    <CommonFooter />
  </div>
</template>

<script>
import CommonHeader from '@/components/common/CommonHeader.vue'
import CommonFooter from '@/components/common/CommonFooter.vue'
import CarrucelHome from '@/components/home/Carrucel.vue'
export default {
  name: 'IndexPage',
  components: {
    CommonHeader,
    CommonFooter,
    CarrucelHome
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
