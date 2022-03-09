<script>
	export let podcasts;

	import PodcastCard from '$lib/sections/podcast/Card.svelte';
</script>

<div class="podcast-grid">
	{#each Object.entries(podcasts) as [i, podcast]}
		<PodcastCard {podcast} large={Number(i) === 0} />
	{/each}
</div>

<style lang="scss">
	.podcast-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
		grid-gap: 1rem;
	}
</style>
