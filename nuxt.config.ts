// https://nuxt.com/docs/api/configuration/nuxt-config

import postcss from './postcss.config'

export default defineNuxtConfig({
  css: [
    '~/assets/css/main.css',
  ],
  postcss,
  devtools: {
    enabled: false
  }
})
