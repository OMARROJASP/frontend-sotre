<template>
  <div>
    <h1>orders</h1>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'OrdersPerfil',
  methods: {
    ...mapActions('index', ['logout']),

    logOut () {
      this.logout()
      this.$router.push('/')
    }
  }
}
</script>
