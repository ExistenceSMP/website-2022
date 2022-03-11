<script context="module">
	import Sanity from '$lib/../sanity';

	/** @type {import('./[slug]').Load} */
	export async function load() {
		const query = `{
			"page": *[_type == 'page' && slug.current == '/'][0],
		}`;

		const data = await Sanity.fetch(query);

		return {
			status: 200,
			props: {
				page: data.page
			}
		};
	}
</script>

<script>
	import Section from '$lib/layout/Section.svelte';
	import CustomComponent from '$lib/util/CustomComponent.svelte';
	import Link from '$lib/util/Link.svelte';

	import PortableText from '@portabletext/svelte';

	export let page;
</script>

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
