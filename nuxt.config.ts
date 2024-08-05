// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		baseURL: '/kvseagent/',
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
		},
	},
	css: ['normalize.css/normalize.css', '~/assets/scss/main.scss'],
	devtools: { enabled: true },
	modules: ['@pinia/nuxt', '@nuxtjs/svg-sprite'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData:
						'@use "@/assets/scss/_variables.scss" as *; @use "@/assets/scss/_mixins.scss" as *;',
				},
			},
		},
	},
});
