// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  studio: {
    dev: false,
    repository: {
      provider: 'github', // 'github' or 'gitlab'
      owner: 'ThermScissorpunch',
      repo: 'nuxt-content-test',
      branch: 'main'
    }
  }
})
