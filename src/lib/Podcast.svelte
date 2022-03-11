<script>
	import PodcastEpisodes from '$lib/podcast.json';

	import PodcastList from '$lib/sections/podcast/List.svelte';

	const episodes = PodcastEpisodes.sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	}).map((v, i) => {
		return {
			...v,
			id: PodcastEpisodes.length - i
		};
	});
</script>

<PodcastList podcasts={episodes} />
