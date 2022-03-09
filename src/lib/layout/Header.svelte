<script>
	// @ts-ignore
	import { page } from '$app/stores';

	import Container from '$lib/layout/Container.svelte';

	import Logo from '$lib/util/Logo.svelte';
</script>

<header>
	<Container>
		<Logo />

		<nav>
			<a sveltekit:prefetch class:active={$page.url.pathname === '/'} href="/"> About </a>
			<a sveltekit:prefetch class:active={$page.url.pathname === '/server'} href="/podcast">
				Server
			</a>
			<a sveltekit:prefetch class:active={$page.url.pathname === '/podcast'} href="/podcast">
				Podcast
			</a>
			<a sveltekit:prefetch class:active={$page.url.pathname === '/downloads'} href="/podcast">
				Downloads
			</a>
		</nav>
	</Container>
</header>

<style lang="scss">
	header {
		width: 100%;
		padding: 3rem 0 1.5rem;
		border-bottom: 1px solid var(--border);
		background: var(--card-bg);

		nav {
			margin-top: 2rem;
		}

		nav a {
			display: inline-block;
			color: var(--header-text-link);
			text-decoration: none;
			padding: 0 10px 10px;
			border-bottom: 2px solid transparent;

			&.active {
				border-bottom-color: var(--header-text-link);
			}
		}
	}
</style>
