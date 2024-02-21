<template>
	<ul class="header-menu-user">
		<li class="header-menu-user__item">
			<div class="header-menu-user__wrap header-menu-user__img">
				<img src="/icons/eagent.svg" alt="">
			</div>
		</li>
		<li class="header-menu-user__item">
			<div class="header-menu-user__wrap header-menu-user__info">
				<span>Контентов Контент</span>
				<span>STAFF KVS</span>
			</div>
		</li>
		<li class="header-menu-user__item">
			<button class="header-menu-user__btn">
				<img src="/icons/user.svg" alt="">
			</button>
		</li>
		<li class="header-menu-user__item">
			<button class="header-menu-user__btn">
				<img src="/icons/logout.svg" alt="">
			</button>
		</li>
	</ul>
</template>

<style lang="scss" scoped>
.header-menu-user {
	display: flex;
    align-items: center;

	&__wrap {
		margin-right: 20px;
	}

	&__info {
		display: grid;
		row-gap: 4px;
		justify-items: flex-end;
		line-height: 120%;
		text-align: right;

		span:last-child {
			font-size: 12px;
		}
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

		img, svg {
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
				transform: translate(-75%,25%) skewX(40deg);
				transition: transform .17s linear,opacity .17s linear;
			}

			&:hover::after {
				opacity: 1;
				transform: translate(0) skewX(40deg);
			}
		}
	}
}

@media screen and (max-width: 1489px) {
	.header-menu-user {
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
    .header-menu-user {
		&__img {
			display: none;
		}
	}
}
</style>