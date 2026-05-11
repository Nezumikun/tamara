// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-auth-utils'],
  runtimeConfig: {
    session: {
      maxAge: 60 * 60 * 24 * 7, // 1 week
      name: 'tamara-session',
      password: process.env.NUXT_SESSION_PASSWORD || ''
    }
  },
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