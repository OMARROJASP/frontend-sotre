<template>
  <div>
    <h1>Mis Datos</h1>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'MisDatosPerfil',
  methods: {
    ...mapActions('index', ['logout']),

    logOut () {
      this.logout()
      this.$router.push('/')
    }
  }
}
</script>
