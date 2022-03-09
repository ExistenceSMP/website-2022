<script>
	import ExternalLinkIcon from '$lib/icons/ExternalLink.svelte';

	export let href;
	export let target = '';
</script>

<a {href} {target}>
	<ExternalLinkIcon />
	<slot />
</a>

<style>
	a {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-gap: 0.5rem;
		align-items: center;
		text-decoration: none;
		color: var(--text);
	}
</style>
