<template>
	<div class="header-mobile">
		<div class="header-mobile__user-info">
			<span>Контентов Контент</span>
			<span>STAFF KVS</span>
		</div>
		<div class="header-mobile__wrap-btns">
			<button
				@click="opened = !opened"
				class="header-mobile__btn header-mobile__burger-btn"
				:class="{open: opened}"
				aria-label="Открыть/Закрыть меню"
			>
				<span></span>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			opened: false,
		}
	},

	methods: {
	},
}
</script>

<style lang="scss" scoped>
.header-mobile {
	display: flex;
	align-items: center;
	column-gap: 20px;
	color: #ffffff;

	&__user-info {
		display: grid;
		row-gap: 4px;
		justify-items: flex-end;
		line-height: 120%;
		text-align: right;

		span:last-child {
			font-size: 12px;
		}
	}

	&__wrap-btns {
		display: flex;
	}

	&__btn {
		border-left: 1px solid #40464d;
	}

	&__burger-btn {
		position: relative;
		width: 64px;
		height: 64px;
		display: flex;
		align-items: center;
		padding: 22px;
		box-sizing: border-box;

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

	&__menu {
		display: none;
		position: absolute;
		top: 64px;
		width: 100%;
		gap: 30px;
		background-color: #ffffff;
		padding: 30px 16px;
		z-index: 1;

		&.open {
			display: grid;
		}
	}
}
</style>