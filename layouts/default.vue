<template>
	<div>
		<AppHeader :template="template"></AppHeader>
		<main>
			<div class="container">
				<slot></slot>
			</div>
		</main>
		<AppFooter :template="template"></AppFooter>
	</div>
</template>

<script>
export default {
	data() {
		return {
			template: {},
		};
	},

	beforeMount() {
		this.getTemplate();
	},

	methods: {
		getTemplate() {
			$fetch('http://localhost:3000/api/template').then((response) => {
				this.template = response.template;
				console.log(response);
			});
		},
	},
};
</script>