<template>
  <div>
    <CommonHeader />
    <h1>
      Page Contacto
    </h1>
    <h5>Estamos trabajando</h5>
  </div>
</template>
<script>
import CommonHeader from '~/components/common/CommonHeader.vue'

export default {
  name: 'Contacto',
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
