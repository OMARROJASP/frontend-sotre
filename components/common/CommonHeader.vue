<template>
  <div class="body-header">
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
      <div class="login-item">
        Iniciar Sesión
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonHeader',
  components: {
  },
  props: {
    size: {
      type: String,
      required: false, // ¿Es requerida?
      default: 'medium', // ¿Tiene un valor por defecto?
      validator: value => ['small', 'medium', 'large'].includes(value)
    }
  },
  data () {
    return {
      showMenuMobile: false
    }
  },

  methods: {
    toggleMenuMobile () {
      this.showMenuMobile = !this.showMenuMobile
    }
  }

}
</script>
