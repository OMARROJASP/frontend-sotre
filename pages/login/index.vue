<template>
  <div>
    <CommonHeader size="medium" />
    <CommonLogin></CommonLogin>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import CommonHeader from '~/components/common/CommonHeader.vue'
import CommonLogin from '~/components/common/CommonLogin.vue'

export default {
  name: 'Login',
  components: {
    CommonHeader,
    CommonLogin
  },
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      Fauthentification: false
    }
  },
  methods: {

    ...mapActions('login', ['singInUser']),

    handlerLogin () {
      const payload = {
        cx_email: this.form.email,
        cx_password: this.form.password
      }

      const result = this.singInUser(payload)

      if (result) {
        this.$router.push('/')
      } else {
        this.Fauthentification = true
      }
    }
  }
}
</script>
