<script>
	const images = [
		'background-community-server-s2.jpg',
		'background-community-server-s1.jpg',
		'background-project-keystone.jpg',
		'background-season-1.jpg',
		'background-project-amplified.jpg',
		'background-season-2.jpg',
		'background-project-hardcore.jpg',
		'background-season-3.jpg'
	];

	let imageIndex = 0;
	let backgroundImage = images[imageIndex];
	setInterval(() => {
		imageIndex = (imageIndex + 1) % images.length;
		backgroundImage = images[imageIndex];
	}, 6e3);
</script>

<div class="carousel" style={`background-image: url('/images/carousel/${backgroundImage}')`} />

<!-- I'll do this later -->
<style lang="scss">
	.carousel {
		width: 100%;
		height: 50vh;
		-webkit-transition: background-image 1s ease-in-out;
		transition: background-image 1s ease-in-out;
		background-size: cover;
		background-position: center;
	}
</style>
