<template>
	<ul class="header-menu-top">
		<li class="header-menu-top__item" v-for="item in menu" :key="item.id">
			<a class="header-menu-top__link" href="#" v-if="item.icon">
				<img :src="item.icon" :alt="item.label">
			</a>
			<NuxtLink class="header-menu-top__link" v-else :to="item.link">{{ item.label }}</NuxtLink>
		</li>
	</ul>
</template>

<script>
export default {
	data() {
		return {
			menu: [
				{
					icon: false,
					label: 'База знаний',
					link: '/objects/',
				},
				{
					icon: false,
					label: 'Акции',
					link: '/promotions/',
				},
				{
					icon: false,
					label: 'Новости',
					link: '/news/',
				},
				{
					icon: false,
					label: 'Избранное',
					link: '/favorites/',
				},
				{
					icon: false,
					label: 'Контакты',
					link: '/contacts/',
				},
				{
					icon: '/icons/online-school-kvs.svg',
					label: '',
					link: '#',
				},
				{
					icon: '/icons/telegram.svg',
					label: '',
					link: '#',
				},
			],
		};
	},
};
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