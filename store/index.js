export const actions = {
  async nuxtClientInit ({ dispatch }) {
    console.log('nuxtClientInit called')
    await dispatch('login/nuxtClientInit')
  }
}
