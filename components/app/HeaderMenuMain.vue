<template>
	<ul class="header-menu-main">
		<li
			class="header-menu-main__item"
			v-for="item in template.menu_main"
			:key="item.id"
		>
			<NuxtLink class="header-menu-main__link" :to="item.link">
				{{ item.label }}
			</NuxtLink>
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