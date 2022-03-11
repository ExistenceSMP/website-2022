<script>
	import Section from '$lib/layout/Section.svelte';
	import CustomComponent from '$lib/util/CustomComponent.svelte';
	import Link from '$lib/util/Link.svelte';
	import ImageCarousel from '$lib/ImageCarousel.svelte';

	import PortableText from '@portabletext/svelte';

	export let page;
</script>

{#if page.carousel}
	<ImageCarousel />
{/if}

{#if page}
	<Section>
		<h1>{page.title}</h1>
		<main class="page-content">
			<PortableText
				blocks={page.body}
				serializers={{
					marks: {
						code: CustomComponent,
						link: Link
					},
					types: {
						youtube: CustomComponent,
						component: CustomComponent
					}
				}}
			/>
		</main>
	</Section>
{/if}

{#if !page}
	Not found?
{/if}
