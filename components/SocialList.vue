<template>
	<ul class="social-list">
		<li class="social-list__item" v-for="socialItem in socialList" :key="socialItem.id">
			<a class="social-list__link" :href="socialItem.link">
				<img :src="socialItem.icon" alt="">
			</a>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		socialList: {
			type: Array,
			default: () => [],
		}
	}
}
</script>

<style lang="scss" scoped>
.social-list {
	display: flex;
	column-gap: 12px;

	&__link {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 32px;
		height: 32px;
		background-color: #40464D;
		border-radius: 100%;

		&:hover {
			background-color: #969BA0;
		}
	}
}
</style>