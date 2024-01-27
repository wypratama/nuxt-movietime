// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts', '@nuxt/image'],
  /**
   * --------------------------------------------------------------------------
   * MODULE CONFIGURATION
   * --------------------------------------------------------------------------
   *
   *
   *
   *
   */
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
  image: {
    providers: {
      myProvider: {
        name: 'local',
        provider: '~/providers/image.ts',
        options: {
          // baseURL: "https://site.com"
        },
      },
    },
  },
})
