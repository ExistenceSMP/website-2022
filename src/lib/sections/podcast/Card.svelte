<script>
	import members from '$lib/members.json';

	import ExternalLink from '$lib/util/ExternalLink.svelte';

	export let podcast;
	export let large;
	export let number;
</script>

<article class="podcast-card" data-large={large}>
	<div class="top" style={`--img: url('/images/podcast/${podcast.id}.png')`}>
		<h3 class="title">{podcast.name}</h3>
		<p class="date">Episode {number} — {podcast.date}</p>
	</div>
	<div>
		<p class="description">{podcast.description}</p>

		<div>
			<div class="people">
				{#each podcast.members.reverse() as memberName}
					{@const member = members.find((m) => m.name === memberName)}
					<img
						class="member"
						src={member.icon
							? member.icon.startsWith('/')
								? `https://existencesmp.com${member.icon}`
								: member.icon
							: `/images/members/${member.name}.png`}
						alt={member.name}
						title={member.name}
					/>
				{/each}
			</div>
		</div>

		<ExternalLink href={podcast.url} target="_blank">Watch on YouTube</ExternalLink>
	</div>
</article>

<style lang="scss">
	.podcast-card {
		background: var(--content);
		border-radius: 0.5rem;
		border: 1px solid var(--border);
		overflow: hidden;

		> * {
			padding: 0.7rem 1rem;
		}

		p {
			margin: 0;
		}

		.top {
			color: white;
			background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), var(--img),
				url(/images/header/header1.jpg);
			background-size: cover;
			background-position: center;

			p {
				color: rgb(230, 230, 230);
			}

			.title {
				margin: 0;
				font-weight: bold;
				font-size: 1.1rem;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
				overflow: hidden;
			}
		}

		.description {
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}
	}

	.people {
		display: inline-flex;
		flex-direction: row-reverse;
		margin: 0.5rem 0;
		margin-bottom: 1rem;

		.member {
			display: block;
			border: 4px solid var(--body);
			border-radius: 10px;
			width: 2.5rem;
			height: 2.5rem;
			image-rendering: pixelated;
			background: var(--body);
		}

		.member:not(:last-child) {
			margin-left: -0.7rem;
		}
	}

	.podcast-card[data-large='true'] {
		grid-column: 1 / -1;

		> * {
			padding: 1.4rem 2rem;
		}

		> .top {
			padding: 3rem 2rem;
		}

		.title {
			font-size: 1.5rem;
		}
	}
</style>
