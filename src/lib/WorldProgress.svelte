<script>
	import { browser } from '$app/env';

	import ArrowLeft from './icons/ArrowLeft.svelte';
	import ArrowRight from './icons/ArrowRight.svelte';

	let allImageUrls = [];
	let allImages = [];
	let currentViewing = 0;

	function setImgSource(i) {
		// Used to load in order
		allImages[i].src = allImages[i].getAttribute('data-src');
		allImages[i].addEventListener('load', () => {
			if (i > 0) setImgSource(i - 1);
		});
	}

	async function setImageUrls() {
		allImageUrls = (
			await fetch('https://existence-smp-discord-bot.hop.sh/').then((res) => res.json())
		).data.map((t) => t.imageUrl);
		console.log(allImageUrls);
		currentViewing = allImageUrls.length - 1;

		allImages = allImageUrls.map((url) => {
			// The reason for using `Image` here is so that it pre-loads and can transition
			const img = new Image();
			img.src =
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAQAAACRI2S5AAAAEElEQVR42mNkIAAYRxWAAQAG9gAKqv6+AwAAAABJRU5ErkJggg==';
			img.setAttribute('data-src', url);
			return img;
		});

		setImgSource(allImages.length - 1);
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
		<div class="image" style="--bg: url('{allImageUrls[currentViewing % allImageUrls.length]}')">
			<img
				src={allImages[currentViewing].src}
				alt={`Week ${currentViewing} on Existence SMP Community Server 2`}
			/>
		</div>
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
		aspect-ratio: 16/9;
		object-fit: cover;
		background-color: var(--border);
		background-image: var(--bg);
		background-size: cover;
		background-position: center;
		border-radius: 6px;
		transition: background-image 400ms;

		img {
			width: 100%;
			aspect-ratio: 16/9;
			opacity: 0;
		}
	}
</style>
