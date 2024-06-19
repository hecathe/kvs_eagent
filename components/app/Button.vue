<template>
	<nuxt-link
		v-if="url"
		:to="url"
		class="button"
	>
		<slot></slot>
	</nuxt-link>

	<button
		v-else
		class="button"
	>
		<slot></slot>
	</button>

</template>

<script>
export default {
	props: {
		isButton: {
			type: Boolean,
			default: true,
		},
		url: {
			type: String,
			default: '#',
		},
	},
};
</script>

<style lang="scss" scoped>
.button {
	position: relative;
	max-width: max-content;
	display: flex;
	justify-content: center;
	align-items: center;
	color: $white;
	background-color: $orange1;
	border: none;
	border-radius: 4px;
	padding: 12px 28px;
	overflow: hidden;
	cursor: pointer;
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

	&:hover::after {
		transform: translate(0) skew(60deg);
		opacity: 1;
	}
}
</style>