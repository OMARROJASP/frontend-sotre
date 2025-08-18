<template>
  <div>
    <CommonHeader></CommonHeader>
    <div id="page-perfil">
      <div class="container">
        <div class="body">
          <aside class="barra-menu">
            <h2 class="title">
              Mi Cuenta
            </h2>
            <ul class="menu">
              <li
                v-for="(item, index) in menuItems"
                :key="index"
                class="components"
              >
                <button
                  :class="{ active: page === index }"
                  @click="chooseOption(index)"
                >
                  {{ item }}
                </button>
              </li>
            </ul>
            <hr class="line">
          </aside>
          <main>
            <MisDatos v-if="page === 0" />
            <Orders v-else-if="page === 1" />
            <Addresses v-else-if="page === 2" />
            <Setting v-else />
          </main>
        </div>
        <button @click="logOut">
          Cerrar Sesion
        </button>
      </div>
    </div>
  </div>
</template>
<script>

import { mapActions } from 'vuex'
import CommonHeader from '~/components/common/CommonHeader.vue'
import Orders from '~/components/perfil/Orders.vue'
import Addresses from '~/components/perfil/Addresses.vue'
import Setting from '~/components/perfil/Setting.vue'
import MisDatos from '~/components/perfil/MisDatos.vue'

export default {
  name: 'Perfil',
  components: {
    CommonHeader,
    Orders,
    Addresses,
    Setting,
    MisDatos
  },
  data () {
    return {
      page: 0, // 0 de mis datos, 1 pedidos, 2 direcciones, 3 configuracion
      menuItems: ['Mis Datos', 'Mis Pedidos', 'Direcciones', 'Configuración']
    }
  },

  methods: {
    ...mapActions('index', ['logout']),

    logOut () {
      this.logout()
      this.$router.push('/')
    },

    chooseOption (option) {
      this.page = option
    }
  }
}
</script>
