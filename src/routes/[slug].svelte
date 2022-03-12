<script context="module">
	import Sanity from '$lib/../sanity';

	/** @type {import('./[slug]').Load} */
	export async function load({ params }) {
		const query = `{
			"page": *[_type == 'page' && slug.current == '${params.slug}'][0],
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
	import Page from '$lib/Page.svelte';

	export let page;
</script>

<Page {page} />
