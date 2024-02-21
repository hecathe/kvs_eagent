<template>
	<footer class="footer">
		<div class="container">
			<div class="footer__item">
				2020, Группа компаний «КВС»
			</div>
			<div class="footer__item">
				<nuxt-link class="footer__link" to="#">Политика конфиденциальности</nuxt-link>
			</div>
			<div class="footer__item">
				<SocialList :social-list="template.social"></SocialList>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	props: {
		template: {
			type: Object,
			default: {}
		}
	},
};
</script>

<style lang="scss" scoped>
.footer {
	background-color: $dark29;
	font-size: 14px;
	line-height: 120%;
	color: $grey96;

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 22px;
		padding-bottom: 22px;
	}

	&__link {
		color: $grey96;
		text-decoration: underline;

		&:hover {
			text-decoration: none;
		}
	}
}

@media screen and (max-width: 767.98px) {
	.footer {
		.container {
			flex-direction: column-reverse;
			row-gap: 18px;
		}
	}
}
</style>