<script>
	// @ts-ignore
	import { browser } from '$app/env';

	import '../app.scss';
	import Header from '$lib/layout/Header.svelte';
	import Footer from '$lib/layout/Footer.svelte';

	import { theme } from '$lib/stores/theme';

	if (browser) {
		if (window.localStorage.getItem('theme')) {
			theme.set(window.localStorage.getItem('theme'));
		} else {
			window.matchMedia('(prefers-color-scheme: dark)').matches
				? theme.set('dark')
				: theme.set('light');
		}
	}
</script>

<svelte:head>
	<meta name="theme-color" content="#FFAA00" />
	<meta name="color-scheme" content={$theme === 'system' ? 'light dark' : $theme} />
</svelte:head>

<div>
	<Header />
</div>

<slot />

<Footer />
