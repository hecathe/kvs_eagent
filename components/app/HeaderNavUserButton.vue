<template>
	<nuxt-link
		v-if="url"
		class="user-button"
		:class="{ 'user-button_orange': orange }"
		:to="url"
	>
		<svg-icon
			:name="icon"
			width="24"
			height="24"
		></svg-icon>
	</nuxt-link>

	<button
		v-else
		class="user-button"
		:class="{ 'user-button_orange': orange }"
	>
		<svg-icon
			:name="icon"
			width="24"
			height="24"
		></svg-icon>
	</button>
</template>

<script>
export default {
	props: {
		url: {
			type: String,
			default: '',
		},
		icon: {
			type: String,
			default: '',
		},
		orange: {
			type: Boolean,
			default: false,
		}
	}
}
</script>

<style lang="scss" scoped>
.user-button {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 72px;
	height: 72px;
	border-left: 1px solid #40464d;
	cursor: pointer;

	&:hover {
		background-color: #40464d;
	}

	&_orange {
		position: relative;
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

	svg {
		--currentColor: #{$white};
	}
}

@media screen and (max-width: 975px) {
	.user-button {
		width: 64px;
		height: 64px;
	}
}
</style>