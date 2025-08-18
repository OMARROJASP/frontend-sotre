<template>
  <div>
    <h1>Ajustes</h1>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'SettingPerfil',
  methods: {
    ...mapActions('index', ['logout']),

    logOut () {
      this.logout()
      this.$router.push('/')
    }
  }
}
</script>
