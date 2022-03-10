<script>
	import { browser } from '$app/env';

	import '../app.scss';
	import Header from '$lib/layout/Header.svelte';

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
	<meta name="color-scheme" content={$theme === 'system' ? 'light dark' : $theme} />
	<link rel="stylesheet" href={`/styles/theme/${$theme}.css`} />
</svelte:head>

<div>
	<Header />
</div>
<slot />

<style lang="scss" global>
	body {
		margin: 0;
		font-family: 'Poppins', Arial;
		background: var(--body);
		color: var(--text);
		margin-bottom: 200px;
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
</style>
