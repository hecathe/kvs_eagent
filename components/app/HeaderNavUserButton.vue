<template>
	<nuxt-link
		class="user-button"
		:class="{ 'user-button_orange': button.orange }"
		:to="button.link"
	>
		<svg-icon
			:name="button.icon"
			width="24"
			height="24"
		></svg-icon>
		<span class="user-button__title">{{ button.title }}</span>
	</nuxt-link>
</template>

<script>
export default {
	props: {
		button: {
			type: Object,
			default: () => {},
		},
		icon: {
			type: String,
			default: ''
		}
	}
}
</script>

<style lang="scss" scoped>
.user-button {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 72px;
	height: 72px;
	color: $dark29;
	border-left: 1px solid #40464d;
	cursor: pointer;

	&:hover {
		background-color: #40464d;
	}

	&__title {
		display: none;
	}

	&_orange {
		position: relative;
		color: $white;
		background-color: $orange1;
		border: none;
		overflow: hidden;
		z-index: 1;

		&::after {
			position: absolute;
			content: '';
			top: -100%;
			right: -100%;
			bottom: -100%;
			left: -100%;
			background-color: $orange2;
			opacity: 0.2;
			transform: translate(-75%, 25%) skew(60deg);
			transition: transform 200ms ease-in-out, opacity 200ms ease-in-out;
			z-index: -1;
		}

		&:hover {
			background-color: $orange1;
		}

		&:hover::after {
			transform: translate(0) skew(60deg);
			opacity: 1;
		}
	}
}

@media screen and (max-width: 975px) {
	.user-button {
		row-gap: 10px;
		width: 100%;
		height: 100%;
		border: none;
		padding: 8px 0;

		&__title {
			display: inline;
			font-size: 14px;
			text-align: center;
		}

		&:not(.user-button_orange) {
			background: none;

			svg {
				--currentColor: #{$dark29};
			}
		}
	}
}
</style>