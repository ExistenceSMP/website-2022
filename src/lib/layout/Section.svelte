<script>
	import Container from '$lib/layout/Container.svelte';
</script>

<section>
	<Container>
		<slot />
	</Container>
</section>

<style lang="scss">
	section {
		margin: 4rem 0;

		:global h2 {
			margin-top: 4rem;
		}
	}
</style>
