<template>
  <div>
    <CommonHeader />
    <CommonRegister />
  </div>
</template>

<script>
import CommonHeader from '~/components/common/CommonHeader.vue'
import CommonRegister from '~/components/common/CommonRegister.vue'

export default {
  name: 'Register',
  components: {
    CommonHeader,
    CommonRegister
  },
  data () {
    return {
      palce: 'lima'
    }
  }
}
</script>
