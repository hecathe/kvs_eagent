<template>
	<div class="user-name">
		<span>{{ user.name }}</span>
		<span>{{ user.title }}</span>
	</div>
</template>

<script>
export default {
	props: {
		user: {
			type: Array,
			default: () => [],
		}
	}
}
</script>

<style lang="scss" scoped>
.user-name {
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
</style>