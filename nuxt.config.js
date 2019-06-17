
module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-lazyload', ssr: false },
    { src: '~/plugins/sw.js', ssr: false },
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
    '@nuxtjs/eslint-module',
  ],
  manifest: {
    crossorigin: 'use-credentials',
  },
  workbox: {
    cachingExtensions: 'http://localhost:3000/',
    importScripts: [
      'custom-sw.js',
    ],
    ignoreUrlParametersMatching: [/./],
    skipWaiting: true,
    runtimeCaching: [
      {
        // To match cross-origin requests, use a RegExp that matches
        // the start of the origin:
        urlPattern: new RegExp('^http://localhost:3000/.*'),
        handler: 'cacheFirst',
        strategyOptions: {
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: new RegExp('^http://localhost:3000/img/.*'),
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: {
          cacheName: 'images',
          cacheableResponse: { statuses: [0, 200, 304] },
        },
      },
    ],
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
  },
};
