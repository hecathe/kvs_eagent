<template>
	<nuxt-link v-if="to" :to="url"></nuxt-link>
	<button v-else class="button">
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
	},
};
</script>

<style lang="scss" scoped>
.button {
	position: relative;
	max-width: max-content;
	display: flex;
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
		top: -50%;
		right: -50%;
		bottom: -50%;
		left: -50%;
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