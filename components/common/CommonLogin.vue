<template>
  <div id="login">
    <main :class="variable === 'page-login' ? 'main-login':'header-Login'">
      <div class="container-login" :class="[variable === 'page-login' ? '':'no-padding']">
        <div class="sections">
          <div class="sections__title">
            <p>
              Iniciar Sesión
            </p>
          </div>
          <form class="sections__form" @submit.prevent="handlerLogin">
            <label for="email">Correo electrónico</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="Ingrese tu correo electroníco"
              required
            >
            <label for="email">Contraseña</label>
            <input
              id="password"
              v-model="form.password"
              type="password"
              placeholder="Ingrese tu contraseña"
              required
            >
            <button type="submit">
              Iniciar Sesión
            </button>
          </form>
          <div class="sections__text">
            <p class="password">
              ¿No tienes una cuenta?
              <router-link to="/register">
                Regístrate
              </router-link>
            </p>
          </div>
          <div class="sections__text">
            <p class="password">
              ¿Olvidaste tu contraseña?
              <router-link to="/forgot-password">
                Recuperar contraseña
              </router-link>
            </p>
          </div>
          <div class="sections__text">
            <p>
              O ingresa con tu cuenta de:
            </p>
          </div>
          <div class="sections__social">
            <div class="icon">
              <img
                src="../../assets/img/login/icon/icon-facebook.png"
                alt="lock"
                width="auto"
                height="35"
              >
            </div>
            <div class="icon">
              <img
                src="../../assets/img/login/icon/icon-google.png"
                alt="lock"
                width="auto"
                height="35"
              >
            </div>
            <div class="icon">
              <img
                src="../../assets/img/login/icon/icon-apple.png"
                alt="lock"
                width="auto"
                height="35"
              >
            </div>
          </div>
        </div>
        <h2 v-show="Fauthentification">Intente otra vez</h2>
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
// import CommonHeader from '~/components/common/CommonHeader.vue'

export default {
  name: 'CommonLogin',
  components: {
    // CommonHeader
  },
  props: {
    // Nos ayudara a dar la clase adecuada para el estilo del componente, dependiendo de donde se llame
    variable: {
      type: String,
      default: 'page-login'
    }
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
    ...mapActions(['getPerfil']),

    async handlerLogin () {
      const payload = {
        cx_email: this.form.email,
        cx_password: this.form.password
      }

      try {
        const result = await this.singInUser(payload)

        if (result) {
          await this.$store.dispatch('getPerfil')
          this.$router.push('/')
        }
      } catch (e) {
        this.Fauthentification = true
        console.error('Error en login:', e)
      }
    }
  }
}
</script>
