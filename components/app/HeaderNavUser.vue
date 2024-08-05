<template>
	<ul class="header-nav-user">
		<li
			class="header-nav-user__item"
			v-for="(item, index) in list"
			:key="index"
		>
		<!-- <span>{{ item }}</span> -->
			<app-header-nav-user-button :button="item"></app-header-nav-user-button>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		list: {
			type: Array,
			default: () => [],
		},
	}
}
</script>

<style lang="scss" scoped>
.header-nav-user {
	display: flex;
	align-items: center;

	&__wrap {
		margin-right: 20px;
	}

	&__btn {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 72px;
		height: 72px;
		border-left: 1px solid #40464d;
		box-sizing: border-box;

		&:hover {
			background-color: #40464d;
		}

		img,
		svg {
			z-index: 1;
		}

		&.active {
			position: relative;
			background-color: $orange1;
			overflow: hidden;

			&::after {
				position: absolute;
				content: "";
				top: -50%;
				bottom: -50%;
				left: -50%;
				right: -50%;
				background-color: $orange2;
				opacity: .2;
				transform: translate(-75%, 25%) skewX(40deg);
				transition: transform .17s linear, opacity .17s linear;
			}

			&:hover::after {
				opacity: 1;
				transform: translate(0) skewX(40deg);
			}
		}
	}
}

.button_icon {
	max-width: 72px;
	width: 72px;
	height: 72px;
}

@media screen and (max-width: 1489px) {
	.header-nav-user {
		&__logo {
			display: none;
		}

		&__img {
			img {
				max-width: 150px;
			}
		}

		&__btn {
			width: 64px;
			height: 64px;
		}
	}
}

@media screen and (max-width: 1279px) {
	.header-nav-user {
		&__img {
			display: none;
		}
	}
}

@media screen and (max-width: 975px) {
	.header-nav-user {
		&__item {
			flex: 1;
		}
	}
}
</style>