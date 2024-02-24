<script>
	import AllSocials from '$lib/AllSocials.svelte';
	import Downloads from '$lib/Downloads.svelte';
	import Podcast from '$lib/Podcast.svelte';
	import WorldProgress from '$lib/WorldProgress.svelte';

	export let portableText;

	$: componentName = portableText?.block?.component;
</script>

{#if portableText.block.url && portableText.block._type === 'youtube'}
	<iframe
		title="YouTube embed"
		src={portableText.block.url}
		frameborder="0"
		allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	/>
{:else if portableText.block.url && portableText.block.alt && portableText.block._type === 'image'}
	<img src={portableText.block.url} alt={portableText.block.alt} />
{:else if componentName === 'socials'}
	<AllSocials />
{:else if componentName === 'podcasts'}
	<Podcast />
{:else if componentName === 'downloads'}
	<Downloads />
{:else if componentName === 'world-progress'}
	<WorldProgress />
{:else}
	<strong class="error">———— Component '{componentName}' not found ————</strong>
{/if}

<style lang="scss">
	.error {
		display: block;
		padding: 10px 0;
		border-top: 1px solid grey;
		border-bottom: 1px solid grey;
		width: 100%;
		text-align: center;
	}
</style>
