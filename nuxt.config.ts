// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ['normalize.css/normalize.css', '~/assets/scss/main.scss'],
	devtools: { enabled: true },
	modules: ['@pinia/nuxt'],
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
