// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts', '@nuxt/image', '@vueuse/nuxt'],
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
  runtimeConfig: {
    baseApi: 'https://api.themoviedb.org/3',
    public: {
      baseImage: 'https://image.tmdb.org/t/p/',
    },
  },
  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },
  experimental: {
    typedPages: true,
    componentIslands: true,

  },
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
      local: {
        name: 'local',
        provider: '~/providers/image/local.ts',
        options: {
          // baseURL: "https://site.com"
        },
      },
      tmdb: {
        name: 'tmdb',
        provider: '~/providers/image/tmdb.ts',
      },
    },
  },
})
