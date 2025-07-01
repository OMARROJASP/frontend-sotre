<template>
  <div>
    <CommonHeader />
    <h1>
      Page Nosotros
    </h1>
    <h5>Estamos trabajando</h5>
  </div>
</template>
<script>
import CommonHeader from '~/components/common/CommonHeader.vue'

export default {
  name: 'Nosotros',
  components: {
    CommonHeader
  },
  data () {
    return {
      palce: 'lima'
    }
  }
}
</script>
