<template>
  <div id="register">
    <div class="registro-container">
      <h2 class="title">
        Registro de Usuario
      </h2>
      <form class="form-container" @submit.prevent="registrarUsuario">
        <div class="cont-data">
          <!-- Campos obligatorios -->
          <div class="cont-info col-4">
            <label for="nombre">Nombre *</label>
            <input id="nombre" v-model="form.nombre" placeholder="Ingrese su nombre" type="text" required>
          </div>
          <div class="cont-info col-4">
            <label for="apellido">Apellido *</label>
            <input id="apellido" v-model="form.apellido" placeholder="Ingrese su apellido" type="text" required>
          </div>
          <div class="cont-info col-4">
            <label for="correo">Correo electrónico *</label>
            <input id="correo" v-model="form.correo" placeholder="Ingrese su correo electrónico" type="email" required>
          </div>
          <div class="cont-info col-4">
            <label for="password">Contraseña *</label>
            <input
              id="password"
              v-model="form.password"
              minlength="8"
              placeholder="Ingrese su contraseña"
              type="password"
              required
            >
          </div>
          <div class="cont-info col-4">
            <label for="password">Repita la Contraseña *</label>
            <input
              id="password"
              v-model="repitPassword"
              minlength="8"
              placeholder="Ingrese su contraseña"
              type="password"
              required
            >
          </div>
          <div class="cont-info col-4">
            <label for="telefono">Teléfono *</label>
            <input
              id="telefono"
              v-model="form.telefono"
              placeholder="Ingrese su telefono"
              type="number"
              max="9"
              required
            >
          </div>
          <div class="cont-info col-6">
            <label for="direccion">Dirección *</label>
            <input id="direccion" v-model="form.direccion" placeholder="Ingrese su direccion" type="text">
          </div>
          <!-- Campos opcionales -->
          <div class="cont-info col-3">
            <label for="ciudad">Ciudad</label>
            <input id="ciudad" v-model="form.ciudad" placeholder="Ingrese su ciudad" type="text">
          </div>
          <div class="cont-info col-3">
            <label for="codigo_postal">Código postal</label>
            <input id="codigo_postal" v-model="form.codigo_postal" placeholder="Ingrese su codigo postal" type="text">
          </div>
        </div>
        <div class="cont-btn">
          <button class="btn-cancel" @click="goHome">
            Cancelar
          </button>
          <button class="btn-register" type="submit">
            Registrar
          </button>
        </div>
      </form>
    </div>
    <CommonPopUp id="popup-register" :visible="showPopUp" @close="showPopUp = false">
      <div class="pop-up">
        <div class="message">
          <p>Las Contraseñas No Son Iguales</p>
        </div>
        <div class="btn" @click="showPopUp = false">
          <button>Aceptar</button>
        </div>
      </div>
    </CommonPopUp>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import CommonPopUp from './CommonPopUp.vue'

export default {
  name: 'CommonRegister',
  components: {
    CommonPopUp
  },
  data () {
    return {
      form: {
        nombre: '',
        apellido: '',
        correo: '',
        password: '',
        telefono: '',
        ciudad: '',
        direccion: '',
        codigo_postal: ''
      },
      repitPassword: '',
      showPopUp: false
    }
  },
  methods: {
    ...mapActions('register', ['registerUser']),

    registrarUsuario () {
      // Validación adicional si se requiere
      if (
        !this.form.nombre ||
        !this.form.apellido ||
        !this.form.correo ||
        !this.form.password ||
        !this.form.telefono
      ) {
        alert('Por favor, completa todos los campos obligatorios.')
        return
      }

      if (
        this.form.password !== this.repitPassword
      ) {
        this.showPopUp = true
        return
      }

      console.log('Datos del formulario:', this.form)

      const payload = {
        cx_first_name: this.form.nombre,
        cx_last_name: this.form.apellido,
        cx_email: this.form.correo,
        cx_password: this.form.password,
        cx_phone: this.form.telefono,
        cx_address: this.form.direccion,
        cx_city: this.form.ciudad,
        cx_postal_code: this.form.codigo_postal
      }

      const result = this.registerUser(payload)
      if (result) {
        this.$router.push('/')
      } else {
        this.Fauthentification = true
      }
    },
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>
