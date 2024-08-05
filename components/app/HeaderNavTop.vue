<template>
	<ul class="header-nav-top">
		<li
			class="header-nav-top__item"
			v-for="item in menuHeader"
			:key="item.id"
		>
			<nuxt-link
				v-if="item.icon"
				:to="item.link"
				class="header-nav-top__link"
			>
				<svg-icon :name="item.icon"></svg-icon>
			</nuxt-link>
			<NuxtLink
				v-else
				:to="item.link"
				class="header-nav-top__link"
			>{{ item.label }}</NuxtLink>
		</li>
		<li class="header-nav-top__item">
			<nuxt-link to="#" class="header-nav-top__link">
				<img
					src="~/assets/sprite/svg/online-school-kvs.svg"
					alt=""
				>
			</nuxt-link>

		</li>
		<li class="header-nav-top__item">
			<nuxt-link to="https://t.me/eagentkvs" target="_blank" class="header-nav-top__link">
				<img
					src="~/assets/sprite/svg/telegram-black.svg"
					alt=""
				>
			</nuxt-link>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		menuHeader: {
			type: Array,
			default: () => [],
		}
	},
};
</script>

<style lang="scss" scoped>
.header-nav-top {
	display: flex;
	align-items: center;
	gap: 24px;
	@include reset-list;
	@include text(15px, 21px, 500);
	margin-right: 120px;

	&__link {
		display: flex;
		height: 100%;
		align-items: center;
		color: $dark29;
		text-decoration: none;

		&:hover {
			color: $grey96;
		}
	}
}

@media screen and (max-width: 1365px) {
	.header-nav-top {
		column-gap: 12px;
	}
}

@media screen and (max-width: 975px) {
	.header-nav-top {
		flex-direction: column;
		align-items: stretch;
		gap: 0;
		margin-right: 0;

		&__link {
			height: 64px;
			font-size: 16px;
			font-weight: 700;
			border-top: 1px solid #DCDFE1;
		}
	}
}
</style>