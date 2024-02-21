<template>
	<ul class="header-menu-main">
		<li
			class="header-menu-main__item"
			v-for="item in menuMain"
			:key="item.id"
		>
			<NuxtLink class="header-menu-main__link" :to="item.link">
				{{ item.label }}
			</NuxtLink>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		menuMain: {
			type: Array,
			default: () => [],
		}
	}
};
</script>

<style lang="scss" scoped>
.header-menu-main {
	display: flex;
	gap: 28px;
	@include text(18px, 28px, 700);

	&__link {
		position: relative;
		display: flex;
		align-items: center;
		height: 72px;
		color: $white;
		text-decoration: none;


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

@media screen and (max-width: 1365px) {
	.header-menu-main {
		column-gap: 14px;
		
		&__link {
			height: 64px;
			font-size: 16px;
		}
    }
}
</style>