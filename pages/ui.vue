<template>
	<div>
		<h1 class="title-h1">Элементы интерфейса</h1>

		<UiButton :is-button="false">Кнопка</UiButton>

		<ul class="list">
			<li>dsfsdf</li>
		</ul>

	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
.list {
	@include reset-list;
}
</style>
