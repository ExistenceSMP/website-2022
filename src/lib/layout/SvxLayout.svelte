<script>
	import Section from '$lib/layout/Section.svelte';
	import ImageCarousel from '$lib/ImageCarousel.svelte';

	export let carousel;
</script>

{#if carousel}
	<ImageCarousel />
{/if}

<Section>
	<div class="svx">
		<slot />
	</div>
</Section>
