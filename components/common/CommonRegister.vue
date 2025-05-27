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
            <input id="telefono" v-model="form.telefono" placeholder="Ingrese su telefono" type="tel" required>
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
          <button class="btn-cancel">
            Cancelar
          </button>
          <button class="btn-register" type="submit">
            Registrar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CommonRegister',
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
      repitPassword: ''
    }
  },
  methods: {
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

      console.log('Datos del formulario:', this.form)
      // this.$axios.post('/api/registro', this.form)
    }
  }
}
</script>
