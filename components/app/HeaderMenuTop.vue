<template>
	<ul class="header-menu-top">
		<li class="header-menu-top__item" v-for="item in template.menu_header" :key="item.id">
			<a class="header-menu-top__link" href="#" v-if="item.icon">
				<img :src="item.icon" :alt="item.label">
			</a>
			<NuxtLink class="header-menu-top__link" v-else :to="item.link">{{ item.label }}</NuxtLink>
		</li>
	</ul>
</template>

<script setup>
import { useTemplate } from '~/stores/template';
import { storeToRefs } from 'pinia';

const store = useTemplate();
const { fetchTemplate } = store;
const { template } = storeToRefs(store);

fetchTemplate();
</script>

<style lang="scss" scoped>
.header-menu-top {
	display: flex;
	height: 40px;
	gap: 24px;
	@include text(15px, 21px, 500);
	margin-right: 120px;

	&__link {
		display: flex;
		height: 100%;
		align-items: center;
		color: $dark29;

		&:hover {
			color: $grey96;
		}
	}
}
</style>