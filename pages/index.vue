<template>
  <div>
    <CommonHeader />
    <CommonFooter />
  </div>
</template>

<script>
import CommonHeader from '@/components/common/CommonHeader.vue'
import CommonFooter from '@/components/common/CommonFooter.vue'

export default {
  name: 'IndexPage',
  components: {
    CommonHeader,
    CommonFooter
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
