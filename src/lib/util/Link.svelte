<script>
	import ExternalLink from '$lib/util/ExternalLink.svelte';
	import Header from '$lib/layout/Header.svelte';

	export let portableText;
</script>

<a href={portableText.mark.href} target={!portableText.mark.href.startsWith('/') ? '_blank' : ''}>
	{portableText.span.text}
</a>
