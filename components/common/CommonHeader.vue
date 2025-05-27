<template>
  <div class="body-header" :class="size">
    <div class="container-header-left">
      <nuxt-link class="logo-title" to="/">
        <p class="title-orange">
          RUKANAS
        </p>
        <p class="title-white">
          STORE
        </p>
      </nuxt-link>
      <div class="header-menu">
        <nuxt-link to="/" class="menu-item">
          Inicio
        </nuxt-link>
        <nuxt-link to="/productos" class="menu-item">
          Productos
        </nuxt-link>
        <nuxt-link to="/ofertas" class="menu-item">
          Ofertas
        </nuxt-link>
        <nuxt-link to="/nosotros" class="menu-item">
          Nosotros
        </nuxt-link>
        <nuxt-link to="/contactos" class="menu-item">
          Contacto
        </nuxt-link>
      </div>
      <div class="header-menu-mobile">
        <div @click="toggleMenuMobile">
          <font-awesome-icon :icon="['fas', 'bars']" size="2xl" style="color: #ffffff;" />
        </div>
        <div v-if="showMenuMobile" class="header-menu-mobile-desplazable">
          <div>
            <ul class="container-menu-item">
              <li>
                <nuxt-link to="/productos" class="menu-item">
                  Productos
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/ofertas" class="menu-item">
                  Ofertas
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/nosotros" class="menu-item">
                  Nosotros
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/contactos" class="menu-item">
                  Contacto
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="header-login">
      <div class="divisor-login">
        |
      </div>
      <div v-if="!session.token" class="login-item" @click="showPopUp = true">
        Iniciar Sesión
      </div>
      <div v-else class="login-item">
        Ver Perfil
      </div>
    </div>

    <CommonPopUp id="popup-login" :visible="showPopUp" @close="showPopUp = false">
      <CommonLogin variable="header-login" />
    </CommonPopUp>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CommonPopUp from '~/components/common/CommonPopUp.vue'
import CommonLogin from '~/components/common/CommonLogin.vue'

export default {
  name: 'CommonHeader',
  components: {
    CommonPopUp,
    CommonLogin
  },
  props: {
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        const cleanValue = value ? value.trim().toLowerCase() : ''
        return ['small', 'medium', 'large'].includes(cleanValue)
      }
    }
  },
  data () {
    return {
      showMenuMobile: false,
      showPopUp: false
    }
  },
  computed: {
    ...mapState('login', {
      session: 'session'
    })
  },
  methods: {
    toggleMenuMobile () {
      this.showMenuMobile = !this.showMenuMobile
    }
  }

}
</script>
