import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Steto Javellana',
    title: 'Portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'steto javellamna portfolio' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og-title', property: 'og:title', content: 'Steto Javellana Portfolio' },
      { hid: 'og-desc', property: 'og:description', content: 'My services and grind' },
      {
        hid: 'og-image', property: 'og:image',
        content: '/me.jpeg'
      }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/style.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/aos.js',
      ssr: false
    },
    {
      src: '~/plugins/pswipe.js',
      ssr: false
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    ['@nuxtjs/eslint-module', {
      fix: true
    }],
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/firebase'
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.cyan,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  firebase: {
    config: {
      apiKey: "AIzaSyBL0TuPCAd9D2TIxgaWTwp4fyZcQbBFHi4",
      authDomain: "portfolio-9699c.firebaseapp.com",
      projectId: "portfolio-9699c",
      storageBucket: "portfolio-9699c.appspot.com",
      messagingSenderId: "767997625487",
      appId: "1:767997625487:web:66db7e5401d59ea0585cfa",
      measurementId: "G-71KJ86SB98"
    },
    services: {
      auth: true,
      firestore: true
    }
  }

}
