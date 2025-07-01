<template>
  <div>
    <button @click="logOut">Cerrar Sesion</button>
  </div>
</template>
<script>

import { mapActions } from 'vuex'

export default {
  name: 'Perfil',
  methods: {
    ...mapActions('index', ['logout']),

    logOut () {
      this.logout()
      this.$router.push('/')
    }
  }
}
</script>
