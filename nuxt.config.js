import webpack from 'webpack'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Multiviral | Tienda de tecnología',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'theme-color', content: '#35495e' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/flaticon.css',
    '@/assets/css/font-awesome.min.css',
    '@/assets/scss/divisima.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/filters.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://auth.nuxtjs.org/guide/setup
    '@nuxtjs/auth-next',
  ],
  router: {},
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.VUE_API_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // For develop on local network
  server: {
    host: '0.0.0.0',
  },

  // Config for PWA
  pwa: {
    manifest: {
      name: 'Multiviral Store',
      lang: 'es',
      start_url: '/',
      theme_color: '#35495e',
    },
    name: 'MultiviralStore',
  },
  auth: {
    redirect: {
      login: '/auth/login',
      home: '/admin/products',
    },
    strategies: {
      local: {
        token: {
          property: 'access_token',
          global: true,
          required: true,
          type: 'Token',
        },
        user: {
          property: false,
          autoFetch: true,
        },
        endpoints: {
          login: { url: '/api/login/', method: 'post' },
          logout: { url: '/api/logout/', method: 'get' },
          user: { url: '/api/me/', method: 'get' },
        },
      }
    },
  },
}
