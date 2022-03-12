<script>
	import { browser } from '$app/env';
	import { setBackgroundColor } from '$lib/../colors';

	import Section from '$lib/layout/Section.svelte';
	import CustomComponent from '$lib/util/CustomComponent.svelte';
	import Link from '$lib/util/Link.svelte';
	import ImageCarousel from '$lib/ImageCarousel.svelte';

	import PortableText from '@portabletext/svelte';

	export let page;

	$: page, runBrowserCheck();
	runBrowserCheck();

	function runBrowserCheck() {
		if (browser) {
			console.log(page, page.color);

			let color = [255, 170, 0];
			if (page.color) {
				// Stole this code from https://www.delftstack.com/howto/javascript/rgb-to-hex-javascript/, that's why it's weird
				const hex = page.color;
				const red = parseInt(hex[1] + hex[2], 16);
				const green = parseInt(hex[3] + hex[4], 16);
				const blue = parseInt(hex[5] + hex[6], 16);
				color = [red, green, blue];
			}

			// @ts-ignore idc
			setBackgroundColor(color);
		}
	}
</script>

{#if page && page.carousel}
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
