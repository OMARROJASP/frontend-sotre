<template>
  <div>
    <CommonHeader :size="headerSize" />
    <div>
      <CarrucelHome />
      <!-- Aqui inicia el espaciado de la pagina principal-->
      <div class="container">
        <div v-show="user && user.first_name" class="intro">
          Hola, <span>{{ user.first_name }} {{ user.last_name }}</span>
          <br>
          Bienvenido a Rukanas Store
        </div>
        <hr class="division">
        <div class="espaciado">
          <CategoriaHome titulo="Categoria" />
        </div>
        <div class="espaciado">
          <CardsHorizontal />
        </div>
      </div>
      <!-- <div>
        <CarrucelOferta titulo="Oferta" />
      </div> -->
    </div>
    <!-- <CommonPopUp id="popup-product" :visible="showPopUp" @close="showPopUp = false">
      <main id="login">
        <div class="container-login">
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
    </CommonPopUp> -->
    <CommonFooter size="medium" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CommonHeader from '@/components/common/CommonHeader.vue'
import CommonFooter from '@/components/common/CommonFooter.vue'
import CarrucelHome from '@/components/home/Carrucel.vue'
import CategoriaHome from '@/components/home/Categoria.vue'
import CardsHorizontal from '@/components/home/CardsHorizontal.vue'
// import CommonPopUp from '~/components/common/CommonPopUp.vue'

export default {
  name: 'IndexPage',
  components: {
    CommonHeader,
    CommonFooter,
    CarrucelHome,
    CategoriaHome,
    CardsHorizontal
    // CommonPopUp
  },
  data () {
    return {
      headerSize: 'medium'
    }
  },
  computed: {
    ...mapState('login', {
      session: 'session'
    }),
    ...mapState('cart', {
      listProductByBuy: 'listProductByBuy'
    }),
    user () {
      return this.$store.state.user
    }
  },
  async mounted () {
    // await this.$store.dispatch('nuxtClientInit')
  },
  async created () {
  }

}

</script>
<style>
.espaciado {
  margin: 30px 0;
}
</style>
