<template>
	<footer class="footer">
		<div class="container">
			<div class="footer__item">
				{{ template.copyright }}
			</div>
			<div class="footer__item">
				<nuxt-link
					class="footer__link"
					v-for="(item, index) in template.privacy_policy"
					:key="index"
					:to="item.link"
				>{{ item.label }}</nuxt-link>
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
		},
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