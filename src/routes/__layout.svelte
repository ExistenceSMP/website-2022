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

<style lang="scss" global>
	:root {
		--body: white;
		--text: #171717;
		--text-secondary: #4c4c4c;
		--anchor: #1d9961;
		--border: #e7e7e7;
		--card-bg: var(--body);
	}

	@mixin dark {
		--body: #161925;
		--text: white;
		--text-secondary: #a8abbd;
		--border: transparent;
		--card-bg: #13141f;
		--anchor: #1d9961;
	}

	[data-theme='dark'] {
		@include dark;
	}

	@media (prefers-color-scheme: dark) {
		[data-theme='system'] {
			@include dark;
		}
	}

	body {
		--header-text-link: var(--text);
	}

	body {
		margin: 0;
		font-family: 'Poppins', Arial;
		background: var(--body);
		color: var(--text);
	}

	h1 {
		font-size: 2.5rem;
	}

	p {
		margin: 1rem 0;
		color: var(--text-secondary);
	}

	.anchor {
		color: var(--anchor);
		text-decoration: none;
		font-weight: bold;

		&:hover {
			text-decoration: underline;
		}
	}

	.embedded iframe {
		width: 100%;
		aspect-ratio: 16/9;
	}
</style>
