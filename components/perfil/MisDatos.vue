<template>
  <div>
    <div id="mis-datos-perfil">
      <div class="title-perfil">
        <h2>Mis Datos</h2>
      </div>
      <div class="body-perfil">
        <div class="body-perfil__view-data">
          <div
            v-for="(value, key) in user"
            :key="`user-${key}`"
            class="info-data"
            :class="{ 'disable': key === 'address' }"
          >
            <div v-if="key !== 'address'" class="detalle">
              <span class="detalle__title">
                {{
                  formatKey(key)
                }}
              </span>
              <span class="detalle__contenido">{{ formatValue(value, key) }}</span>
            </div>
          </div>
          <div
            v-for="(value, key) in user.address"
            :key="`address-${key}`"
            class="info-data"
          >
            <div class="detalle">
              <span class="detalle__title">
                {{
                  formatAddressKey(key)
                }}
              </span>
              <span class="detalle__contenido">{{ value }}</span>
            </div>
          </div>
        </div>
        <div class="body-perfil__button">
          <button>Editar</button>
        </div>
        <CommonRegister v-if="activeEdit" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import CommonRegister from '../common/CommonRegister.vue'

export default {
  name: 'MisDatosPerfil',
  components: {
    CommonRegister
  },
  data () {
    return {
      activeEdit: false
    }
  },
  computed: {
    ...mapState('login', {
      session: 'session'
    }),
    user () {
      return this.$store.state.user
    }
  },
  mounted () {
    this.EditData()
  },
  methods: {
    ...mapActions('index', ['logout']),

    logOut () {
      this.logout()
      this.$router.push('/')
    },

    EditData () {
      console.log('informascion de : ', this.user)
    },

    formatKey (key) {
      const keyMap = {
        first_name: 'Nombre',
        last_name: 'Apellido',
        email: 'Email',
        phone: 'Teléfono'
      }
      return keyMap[key] || key
    },

    formatValue (value, key) {
      if (typeof value === 'boolean') {
        return value ? 'Si' : 'No'
      }
      return value
    },

    formatAddressKey (key) {
      const addressMap = {
        street: 'Calle',
        city: 'Ciudad',
        state: 'Estado',
        zip_code: 'Código Postal'
      }
      return addressMap[key] || key
    }
  }
}
</script>
