export const state = () => ({
  user: {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: {
      street: '',
      city: '',
      state: '',
      zip_code: ''
    }
  },
  loggedIn: false
})

export const mutations = {
  setUser (state, user) {
    if (!user) {
      state.user = {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        address: {
          street: '',
          city: '',
          zip_code: ''
        }
      }
      state.loggedIn = false
      return
    }

    state.user.first_name = user.first_name || ''
    state.user.last_name = user.last_name || ''
    state.user.email = user.email || ''
    state.user.phone = user.phone || ''
    state.user.address.street = user.address || ''
    state.user.address.city = user.city || ''
    state.user.address.zip_code = user.postal_code || ''
    state.loggedIn = true
  }
}

export const actions = {
  async nuxtServerInit ({ commit }, { $axios }) {
    try {
      const user = await $axios.$get('/customer/perfil')
      commit('setUser', user)
    } catch (error) {
      console.log('No autenticado o error en el perfil', error)
      commit('setUser', null)
    }
  },
  async getPerfil ({ commit }) {
    try {
      const user = await this.$axios.$get('/customer/perfil')
      commit('setUser', user)
    } catch (error) {
      commit('setUser', null)
    }
  },
  logout ({ commit }) {
    // Limpia el estado del usuario
    commit('setUser', null)
    console.log('Usuario desconectado')

    // Limpia la cookie (solo en el cliente)
    if (process.client) {
      document.cookie = 'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;'
    }
  }
}
