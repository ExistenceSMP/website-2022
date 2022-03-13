<script>
	import { page } from '$app/stores';

	import ThemeToggle from '$lib/util/ThemeToggle.svelte';
</script>

<div class="nav-container">
	<div class="nav-wrapper">
		<nav>
			<a sveltekit:prefetch class:active={$page.url.pathname === '/'} href="/"> About </a>
			<a sveltekit:prefetch class:active={$page.url.pathname === '/server'} href="/server">
				Server
			</a>
			<a sveltekit:prefetch class:active={$page.url.pathname === '/podcast'} href="/podcast">
				Podcast
			</a>
			<a sveltekit:prefetch class:active={$page.url.pathname === '/downloads'} href="/downloads">
				Downloads
			</a>
			<div class="gradient" />
		</nav>
	</div>
	<ThemeToggle />
</div>

<style lang="scss">
	.nav-container {
		display: grid;
		grid-template-columns: 1fr auto;

		.nav-wrapper {
			position: relative;
			display: grid;
		}

		nav {
			margin-top: 2rem;
			display: flex;
			white-space: nowrap;
			overflow-x: auto;
			padding-left: 5vw;
			margin-left: -5vw;

			&::after {
				content: '';
				display: block;
				min-width: 2rem;
				height: 1px;
			}

			.gradient {
				width: 3rem;
				height: 100%;
				position: absolute;
				right: -1px;
				top: 0;
				background: linear-gradient(to left, var(--body), transparent);
			}
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
