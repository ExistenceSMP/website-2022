<script>
	export let href;
	export let target = '_blank';
	export let platform = 'neutral';
</script>

<a class="social-link" {href} {target} data-platform={platform}>
	<slot />
</a>

<style lang="scss">
	a {
		display: grid;
		grid-template-columns: 1fr auto;
		grid-gap: 0.5rem;
		align-items: center;
		color: var(--text);
		--color: grey;

		&[data-platform='youtube'] {
			--color: #d72523;
		}

		&[data-platform='bluesky'] {
			--color: #0085ff;
		}

		&[data-platform='discord'] {
			--color: #5e79b6;
		}

		&[data-platform='patreon'] {
			--color: #f96854;
		}

		:global(.icon) {
			padding: 0.5rem;
			border-radius: 0.25rem;
			background: var(--color);

			:global(svg) {
				display: block;
				width: 1.5rem;
				height: 1.5rem;
			}
		}
	}
</style>
