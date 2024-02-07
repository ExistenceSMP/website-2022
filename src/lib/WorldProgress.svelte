<script>
	import { browser } from '$app/env';

	import ArrowLeft from './icons/ArrowLeft.svelte';
	import ArrowRight from './icons/ArrowRight.svelte';

	let allImageUrls = [];
	let allImages = [];
	let currentViewing = 0;

	function setImgSource(i) {
		// Used to load in order
		if (allImages[i]) allImages[i].src = allImages[i].getAttribute('data-src');
		if (allImages[i - 1]) allImages[i - 1].src = allImages[i - 1].getAttribute('data-src');
	}

	async function setImageUrls() {
		allImageUrls = (
			await fetch('https://discord-bot-legacy.fly.dev/').then((res) => res.json())
		).data.map((t) => t.imageUrl);
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

	$: currentViewing, allImageUrls.length > 0 && setImgSource(currentViewing - 1);

	if (browser) setImageUrls();

	// async function downloadGif() {
	// 	// @ts-ignore GIF is globally imported
	// 	var gif = new GIF({
	// 		workers: 2,
	// 		quality: 10,
	// 		width: 128 * 4,
	// 		height: 72 * 4
	// 	});

	// 	await Promise.all(
	// 		allImages.map(async (img) => {
	// 			img.crossOrigin = 'Anonymous';
	// 			img.src = img.getAttribute('data-src');

	// 			await new Promise((resolve) => img.addEventListener('load', resolve));
	// 		})
	// 	);

	// 	// add a image element
	// 	for (const img of allImages) {
	// 		const canvas = document.createElement('canvas');
	// 		canvas.width = 128 * 4;
	// 		canvas.height = 72 * 4;
	// 		const ctx = canvas.getContext('2d');
	// 		ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
	// 		gif.addFrame(canvas);
	// 	}

	// 	gif.on('finished', (blob) => {
	// 		window.open(URL.createObjectURL(blob));
	// 	});

	// 	gif.render();
	// }
</script>

<!-- <button on:click={downloadGif}>Download</button> -->

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
				alt={`Week ${currentViewing} on Existence Community Server 2`}
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
