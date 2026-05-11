// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-auth-utils'],
  css: ['~/assets/css/main.css'],
  routeRules : {
    '/welcome': {
      appLayout: 'welcome'
    },
    '/auth/**': {
      appLayout: 'welcome'
    }
  }
})