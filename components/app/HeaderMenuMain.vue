<template>
	<ul class="header-menu-main">
		<li class="header-menu-main__item" v-for="item in menu" :key="item.id">
			<NuxtLink class="header-menu-main__link" :to="item.link">
				{{ item.label }}
			</NuxtLink>
		</li>
	</ul>
</template>

<script>
export default {
	data() {
		return {
			menu: [],
		};
	},

	mounted() {
		this.getTemplate();
	},

	methods: {
		getTemplate() {
			$fetch('http://localhost:3000/api/template')
				.then((response) => {
					this.menu = response.template.menu_main;
					console.log(response);
					console.log(this.menu);
				});
		}
	},
};
</script>

<!-- <script setup>
const { data: response } = await useFetch('http://localhost:3000/api/template', {
	method: 'get',
});
console.log(response);
</script> -->

<style lang="scss" scoped>
.header-menu-main {
	height: 72px;
	display: flex;
	gap: 28px;
	color: $white;
	@include text(18px, 28px, 700);

	&__link {
		position: relative;
		display: flex;
		align-items: center;
		height: 100%;

		&::after {
			position: absolute;
			content: '';
			bottom: 0;
			width: 100%;
			height: 2px;
			background-color: $orange1;
			opacity: 0;
		}

		&:hover {
			color: $grey96;

			&::after {
				opacity: 1;
			}
		}
	}
}
</style>