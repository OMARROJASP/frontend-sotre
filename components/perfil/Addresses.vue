<template>
  <div>
    <h1>Address </h1>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'AddressPerfil',
  methods: {
    ...mapActions('index', ['logout']),

    logOut () {
      this.logout()
      this.$router.push('/')
    }
  }
}
</script>
