require('dotenv').config();
export default {
  mode: 'universal',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'designclient',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
       {src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"},
       {src: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.bundle.min.js"},
       {src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/js/all.min.js"},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~plugins/vform',
  '~components/_global'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
 buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/router',
    '@nuxtjs/auth'
],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios'
  ],
  auth: {
  strategies: {
    local: {
      endpoints: {
        login: { url: '/login', method: 'post', propertyName: 'token' },
        logout: { url: '/logout', method: 'post' },
        user: { url: '/me', method: 'get', propertyName: 'data' }
      }
    }
  }
},
  axios: {
    baseurl: process.env.API_URL
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
