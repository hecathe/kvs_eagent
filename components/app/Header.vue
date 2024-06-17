<template>
	<header class="header">
		<NuxtLink class="header__logo" to="/">
			<img src="/icons/kvs-logo.svg" alt="logo" />
		</NuxtLink>

		<div class="header__mobile">
		</div>

		<div class="header__top">
			<div class="header__wrapper">
				<AppHeaderMenuTop :menu-header="template.menu_header"></AppHeaderMenuTop>

				<div class="header__slogan" v-for="item in template.tagline" :key="item.id">
					<span class="text-orange">{{ item.main }}</span>
					<span>{{ item.additional }}</span>
				</div>
			</div>
		</div>

		<div class="header__bottom">
			<div class="header__wrapper">
				<AppHeaderMenuMain :menu-main="template.menu_main"></AppHeaderMenuMain>

				<AppHeaderMenuUser></AppHeaderMenuUser>
			</div>
		</div>
	</header>
</template>

<script>
import template from '~/server/api/template';

export default {
	props: {
		template: {
			type: Object,
			default: {}
		}
	},

	mounted() {
		window.addEventListener('resize', this.onResize);
		this.onResize();
	},

	unmounted() {
		window.removeEventListener('resize', this.onResize);
	},

	methods: {
		onResize() {
			this.mobile = window.innerWidth <= 975;
		}
	},
};
</script>

<style lang="scss" scoped>
.header {
	position: relative;

	&__logo {
		position: absolute;
		display: flex;
		width: 105px;
		top: 0;
		bottom: 0;
		left: 32px;
	}

	&__wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-left: calc(50% - 715px);
		padding-left: 16px;
	}

	&__bottom {
		color: $white;
		background-color: $dark29;
	}

	&__slogan {
		display: flex;
		align-items: center;
		@include text(15px, 21px, 500);
		margin-right: 16px;
	}
}

@media screen and (max-width: 1699px) {
	.header {
		&__logo {
			left: 16px;
		}

		&__wrapper {
			margin-left: calc(100vw - 94%);
		}
	}
}

@media screen and (max-width: 975px) {
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: $dark29;

		&__logo {
			position: static;
			height: 60px;
			padding: 0 20px;
		}
	}
}

@media screen and (max-width: 1469px) {
	.header {
		&__slogan {
			span:not(:first-child) {
				display: none;
			}
		}
	}
}

@media screen and (max-width: 1365px) {
	.header {
		&__logo svg {
			max-width: 70px;
		}
	}
}

@media screen and (max-width: 1159px) {
	.header {
		&__slogan {
			display: none;
		}
	}
}
</style>
