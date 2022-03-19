<script>
	import ExternalLink from '$lib/util/ExternalLink.svelte';

	export let world;
</script>

<article class="world-card">
	<aside>
		<img class="icon" src={world.icon} alt="World icon" />
	</aside>
	<main>
		<h3>{world.name}</h3>

		{#if world.download}
			<p>
				{world.download.date} • {world.download.version} • {world.download.title}
			</p>
			<ExternalLink href={world.download.url} download={world.name} target="_blank">
				Download world
			</ExternalLink>
		{/if}
	</main>
</article>

<style lang="scss">
	.world-card {
		padding: 0.7rem 1rem;
		border-radius: 0.5rem;
		background: var(--content);
		border: 1px solid var(--border);
		display: grid;
		grid-template-columns: 2.5rem 1fr;
		grid-gap: 1rem;

		img {
			max-width: 100%;
		}

		h3 {
			margin: 0;
			color: var(--text);
		}

		p {
			margin: 0.5rem 0;
		}
	}
</style>
