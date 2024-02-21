import { defineStore } from 'pinia';

export const useTemplate = defineStore('template', {
	state: () => ({
		template: {},
	}),
	getters: {
		getTemplate(state) {
			return state.template;
		},
	},
	actions: {
		async fetchTemplate() {
			this.temp = await useFetch('http://localhost:3000/api/template');
			console.log(this.temp);
		},
	},
});
