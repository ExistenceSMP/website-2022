<script>
	import { browser } from '$app/env';

	import Moon from '$lib/icons/Moon.svelte';
	import Sun from '$lib/icons/Sun.svelte';

	import { theme } from '$lib/stores/theme';

	theme.subscribe((value) => {
		if (browser) {
			window.localStorage.setItem('theme', value);
			document.body.setAttribute('data-theme', value);
		}
	});

	function toggleTheme() {
		if ($theme === 'system') {
			theme.set('light');
		} else {
			$theme === 'dark' ? theme.set('light') : theme.set('dark');
		}
	}

	if (browser) {
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
			const newColorScheme = event.matches ? 'dark' : 'light';
			theme.set(newColorScheme);
		});
	}
</script>

<div class="theme-toggle">
	<button on:click={toggleTheme}>
		{#if $theme === 'dark' || $theme === 'system'}
			<Moon />
		{:else}
			<Sun />
		{/if}
	</button>
</div>

<style lang="scss">
	/* for some reason accessing .theme-toggle at the same scope as nav in Header won't work, so putting this here for the time being */
	.theme-toggle {
		margin-top: 1.5rem;
		padding-right: 10px;
	}

	button {
		border: 0;
		background-color: transparent;

		&:hover {
			cursor: pointer;
		}
	}
</style>
