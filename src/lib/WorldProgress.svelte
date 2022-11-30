<script>
	import { browser } from '$app/env';

	const imageModules = import.meta.globEager('../../static/images/cs2-progress/*.png');

	import ArrowLeft from './icons/ArrowLeft.svelte';
	import ArrowRight from './icons/ArrowRight.svelte';

	let allImageUrls = [];
	let allImages = [];
	let currentViewing = 0;

	async function setImageUrls() {
		allImageUrls = Object.keys(imageModules)
			.map((t) => t.split('static/').pop())
			.sort((a, b) => {
				const aIndex = Number(a.split('/').pop().split(' ')[0]);
				const bIndex = Number(b.split('/').pop().split(' ')[0]);
				return aIndex - bIndex;
			});
		currentViewing = allImageUrls.length - 1;

		allImages = allImageUrls.map((url) => {
			const img = new Image();
			img.src = url;
			return img;
		});
	}

	if (browser) setImageUrls();
</script>

{#if allImageUrls.length > 0}
	<div class="viewer">
		<span class="full">
			Week {currentViewing}
		</span>
		<button class:hidden={currentViewing <= 0} on:click={() => currentViewing--}>
			<ArrowLeft />
		</button>
		<div class="image" style="--bg: url('{allImageUrls[currentViewing % allImageUrls.length]}')" />
		<button
			class:hidden={currentViewing >= allImageUrls.length - 1}
			on:click={() => currentViewing++}
		>
			<ArrowRight />
		</button>
	</div>
{/if}

<style lang="scss">
	.viewer {
		width: 100%;
		display: grid;
		grid-template-columns: auto 1fr auto;
		grid-gap: 10px;

		.full {
			grid-column: 1 / -1;
			text-align: center;
		}
	}
	.viewer button {
		height: 100%;
		border-radius: 6px;
		background: var(--content);
		border: 0;
		cursor: pointer;
		transition: opacity 200ms;

		&.hidden {
			opacity: 0;
			pointer-events: none;
		}
	}
	.viewer .image {
		width: 100%;
		aspect-ratio: 1028/643;
		background-color: var(--border);
		background-image: var(--bg);
		background-size: cover;
		background-position: center;
		border-radius: 6px;
		transition: background-image 200ms;
	}
</style>
