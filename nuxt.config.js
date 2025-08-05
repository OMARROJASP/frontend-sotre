export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontend-ecommerce',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
      }
    ]
  },

  ssr: true,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/style.scss',
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-vue/dist/bootstrap-vue.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/fontawesome.js',
    { src: '~/plugins/vue-slider.js', mode: 'client' },
    '@/plugins/test.js',
    { src: '~/plugins/owl.client.js', mode: 'client', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    'bootstrap-vue/nuxt'
  ],
  bootstrapVue: {
    bootstrapCSS: false, // usamos CSS de Bootstrap manualmente
    bootstrapVueCSS: false // usamos CSS de BootstrapVue manualmente
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_BACKEND || 'http://localhost:3001/',
    credentials: true // importante
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
