<template>
	<header class="header">
		<NuxtLink class="header__logo" to="/">
			<img src="/icons/kvs-logo.svg" alt="logo">
		</NuxtLink>

		<div class="header__top">
			<div class="header__wrapper">
				<AppHeaderMenuTop></AppHeaderMenuTop>

				<div class="header__slogan">
					<span class="text-orange">Агентский портал «КВС».</span>
					<span>Строим мир — строим отношения!</span>
				</div>
			</div>
		</div>

		<div class="header__bottom">
			<div class="header__wrapper">
				<AppHeaderMenuMain></AppHeaderMenuMain>

				<ul>
					<li>
						<img src="/icons/eagent.svg" alt="">
					</li>
					<li>
						<span>Контентов Контент</span>
						<span>STAFF KVS</span>
					</li>
				</ul>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
.header {
	position: relative;

	&__logo {
		position: absolute;
		display: flex;
		width: 105px;
		top: 0;
		bottom: 0;
		left: 32px;
	}

	&__wrapper {
		display: flex;
		margin-left: calc(50% - 715px);
		padding-left: 16px;
	}

	&__bottom {
		background-color: $dark29;
	}

	&__slogan {
		display: flex;
		align-items: center;
		@include text(15px, 21px, 500);
	}
}
</style>
