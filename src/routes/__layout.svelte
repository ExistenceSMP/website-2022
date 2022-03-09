<script>
	import '../app.scss';
	import Header from '$lib/layout/Header.svelte';
</script>

<div>
	<Header />
</div>
<slot />

<style lang="scss" global>
	:root {
		--body: white;
		--text: #171717;
		--text-secondary: #4c4c4c;
		--anchor: #1d9961;
		--border: #e7e7e7;
		--card-bg: var(--body);
	}

	:root {
		--header-text-link: var(--text);
	}

	@media (prefers-color-scheme: dark) {
		:root {
			--body: #161925;
			--text: white;
			--text-secondary: #a8abbd;
			--border: transparent;
			--card-bg: #13141f;
		}
	}

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
