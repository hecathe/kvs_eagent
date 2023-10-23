<template>
	<h2 style="font-weight: 800">"{{ text }}"</h2>
</template>

<script>
export default {
	props: {
		text: {
			type: String,
			default: 'Some Message',
		},
	},
};
</script>
