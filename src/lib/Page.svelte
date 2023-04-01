<script>
	import { browser } from '$app/env';
	import { setBackgroundColor } from '$lib/../colors';

	import Section from '$lib/layout/Section.svelte';
	import CustomComponent from '$lib/util/CustomComponent.svelte';
	import Link from '$lib/util/Link.svelte';
	import ImageCarousel from '$lib/ImageCarousel.svelte';

	import PortableText from '@portabletext/svelte';

	import { page as pageStore } from '$lib/stores/page';

	export let page;

	$: page, runBrowserCheck();
	runBrowserCheck();

	function runBrowserCheck() {
		pageStore.set(page);
		if (browser) {
			document.querySelectorAll('.colors').forEach((style) => style.remove());
			// let color;
			// if (page.color) {
			// 	// Stole this code from https://www.delftstack.com/howto/javascript/rgb-to-hex-javascript/, that's why it's weird
			// 	const hex = page.color;
			// 	const red = parseInt(hex[1] + hex[2], 16);
			// 	const green = parseInt(hex[3] + hex[4], 16);
			// 	const blue = parseInt(hex[5] + hex[6], 16);
			// 	color = [red, green, blue];
			// }

			// // @ts-ignore idc
			// if (color) setBackgroundColor(color);
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
	<Section>
		<h1>404: Page Not Found</h1>
		<p>
			How did you get here? Maybe let one of our Admins know in our <a
				href="https://existencesmp.com/discord"
				target="_blank"
			>
				Discord Server
			</a>
		</p>

		<div class="embedded">
			<iframe
				title="Hamsters?"
				src="https://www.youtube.com/embed/p3G5IXn0K7A?autoplay=1"
				frameborder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			/>
		</div>
	</Section>
{/if}
