<script>
	import { browser } from '$app/env';

	import Container from '$lib/layout/Container.svelte';
	import Logo from '$lib/util/Logo.svelte';
	import Nav from '$lib/layout/Nav.svelte';

	let scrollTop = 0;
	let navEl;
	let navTop = 500;

	function updatePosition() {
		scrollTop = window.scrollY;
		navTop = navEl?.offsetTop - scrollTop;
	}

	if (browser) {
		window.addEventListener('scroll', () => {
			updatePosition();
		});
		updatePosition();
	}
</script>

<header>
	<Container>
		<Logo />
		<div bind:this={navEl}>
			<Nav />
		</div>
	</Container>
	<div class="sticky" class:visible={navTop <= 0}>
		<Container>
			<Nav />
		</Container>
	</div>
</header>

<style lang="scss">
	header {
		width: 100%;
		padding: 3rem 0 1.5rem;
		background: var(--header-bg);
	}
	.sticky {
		position: fixed;
		width: 100%;
		top: 0;
		opacity: 0;
		background: var(--header-bg);
		z-index: 10;

		&.visible {
			opacity: 1;
		}
	}
</style>
