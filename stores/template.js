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
		fetchTemplate() {
			$fetch('http://localhost:3000/api/template').then((response) => {
				this.template = response.template;
			});
		},
	},
});
