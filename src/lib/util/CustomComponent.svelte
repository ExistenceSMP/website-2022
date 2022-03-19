<script>
	import AllSocials from '$lib/AllSocials.svelte';
	import Downloads from '$lib/Downloads.svelte';
	import Podcast from '$lib/Podcast.svelte';

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
{:else if componentName === 'socials'}
	<AllSocials />
{:else if componentName === 'podcasts'}
	<Podcast />
{:else if componentName === 'downloads'}
	<Downloads />
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
