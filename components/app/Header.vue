<template>
	<header class="header">
		<NuxtLink
			class="header__logo"
			to="/"
		>
			<svg-icon name="kvs-logo"></svg-icon>
		</NuxtLink>

		<div class="header__mobile">
			<user-name :user="template.user"></user-name>

			<button
				class="header__burger"
				@click="opened = !opened"
				:class="{ open: opened }"
			>
				<span></span>
			</button>
		</div>

		<div
			v-if="opened"
			class="header__mobile-menu mobile-menu"
		>
			<AppHeaderNavUser :list="template.menu_user"></AppHeaderNavUser>
			<div
				class="header__slogan"
				v-for="item in template.tagline"
				:key="item.id"
			>
				<span class="text-orange">{{ item.main }}</span>
				<span>{{ item.additional }}</span>
			</div>
			<div class="mobile-menu__list">
				<AppHeaderNavMain :menu-main="template.menu_main"></AppHeaderNavMain>
				<AppHeaderNavTop :menu-header="template.menu_header"></AppHeaderNavTop>
			</div>
		</div>

		<div class="header__top">
			<div class="header__wrapper">
				<AppHeaderNavTop :menu-header="template.menu_header"></AppHeaderNavTop>

				<div
					class="header__slogan"
					v-for="item in template.tagline"
					:key="item.id"
				>
					<span class="text-orange">{{ item.main }}</span>
					<span>{{ item.additional }}</span>
				</div>
			</div>
		</div>

		<div class="header__bottom">
			<div class="header__wrapper">
				<AppHeaderNavMain :menu-main="template.menu_main"></AppHeaderNavMain>

				<div class="header__user-menu">
					<div class="header__eagent-logo">
						<svg-icon
							name="eagent"
							width="200"
							height="39"
						></svg-icon>
					</div>
					<user-name :user="template.user"></user-name>


					<AppHeaderNavUser :list="template.menu_user"></AppHeaderNavUser>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	props: {
		template: {
			type: Object,
			default: {}
		},
		opened: {
			type: Boolean,
			default: false,
		}
	},
	data() {
		return {
			user: this.template.user,
		}
	},
};
</script>

<style lang="scss" scoped>
.header {
	position: relative;
	// white-space: nowrap;

	&__mobile {
		display: none;
		column-gap: 20px;
	}

	&__mobile-menu {
		display: flex;
		flex-direction: column;
		row-gap: 30px;
		position: absolute;
		width: 100%;
		height: calc(100vh - 64px);
		top: 64px;
		left: 0;
		min-height: max-content;
		background-color: $white;
		padding: 30px 16px;
		z-index: 3;
	}

	&__burger {
		position: relative;
		width: 64px;
		height: 64px;
		display: flex;
		align-items: center;
		padding: 22px;
		box-sizing: border-box;
		border-left: 1px solid #40464D;

		span {
			width: 20px;
			height: 2px;
			background-color: #ffffff;
			transition: width 150ms ease-in-out;
		}

		&::before,
		&::after {
			position: absolute;
			content: '';
			height: 2px;
			background-color: #ffffff;
			transition: transform 150ms ease-in-out;
		}

		&::before {
			width: 20px;
			top: 24px;
		}

		&::after {
			width: 16px;
			bottom: 24px;
		}

		&.open {
			span {
				width: 0;
			}

			&::before {
				transform: rotate(45deg) translate(5px, 5px);
			}

			&::after {
				width: 20px;
				transform: rotate(-45deg) translate(5px, -5px);
			}
		}
	}

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

	&__top {
		padding: 5px 0;
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

	&__user-menu {
		display: flex;
		align-items: center;
		column-gap: 20px;
	}

	&__user-info {
		display: grid;
		row-gap: 4px;
		justify-items: flex-end;
		align-content: center;
		line-height: 120%;
		text-align: right;
		color: $white;

		span:last-child {
			font-size: 12px;
		}
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

@media screen and (max-width: 1469px) {
	.header {
		&__slogan {
			span:not(:first-child) {
				display: none;
			}
		}

		&__eagent-logo {
			display: none;
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

		&__mobile {
			display: flex;
		}

		&__mobile-menu {
			.header__slogan {
				display: inline-block
			}

			.header__slogan span[data-v-d5d17c1d]:not(:first-child) {
				display: inline-block;
			}
		}

		&__top {
			display: none;
		}

		&__bottom {
			display: none;
		}
	}
}
</style>
