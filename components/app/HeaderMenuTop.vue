<template>
	<ul class="header-menu-top">
		<li class="header-menu-top__item" v-for="item in menuHeader" :key="item.id">
			<a class="header-menu-top__link" :href="item.link" v-if="item.icon">
				<img :src="item.icon" :alt="item.label">
			</a>
			<NuxtLink class="header-menu-top__link" v-else :to="item.link">{{ item.label }}</NuxtLink>
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
.header-menu-top {
	display: flex;
	height: 40px;
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
	.header-menu-top {
        column-gap: 12px;
    }
}
</style>