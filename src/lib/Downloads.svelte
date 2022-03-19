<script>
	import WorldCard from '$lib/util/WorldCard.svelte';

	const legacyWorlds = [
		{
			name: 'Existence SMP S1',
			icon: '/images/logos/existence-s1-logo.png',
			download: {
				version: '1.12.2',
				title: '.zip (2.61 GB)',
				date: '2017-08-04',
				url: 'https://downloads.existencesmp.com/files/worlds/ExistenceSMPS1.zip'
			}
		},
		{
			name: 'Existence SMP S2',
			icon: '/images/logos/existence-s2-logo.png',
			download: {
				version: '1.13.2',
				title: '.zip (2.59 GB)',
				date: '2019-03-16',
				url: 'https://downloads.existencesmp.com/files/worlds/ExistenceSMPS2.zip'
			}
		},
		{
			name: 'Existence SMP S3',
			icon: '/images/logos/existence-s3-logo.png',
			download: {
				version: '1.15.2',
				title: '.zip (2.15 GB)',
				date: '2020-03-18',
				url: 'https://downloads.existencesmp.com/files/worlds/ExistenceSMPS3.zip'
			}
		}
	];

	const projectWorlds = [
		{
			name: 'Project Hardcore S1',
			icon: '/images/logos/existence-project-hardcore-s1-logo.png',
			download: {
				version: '1.12.2',
				title: '.zip (148 MB)',
				date: '2019-04-24',
				url: '/images/logos/existence-project-hardcore-s1-logo.png'
			}
		},
		{
			name: 'Project Keystone',
			icon: '/images/logos/existence-project-keystone-logo.png',
			download: {
				version: '1.15.2',
				title: '.zip (3.4 GB)',
				date: '2020-06-27',
				url: 'https://downloads.existencesmp.com/files/worlds/ExistenceSMPProjectKeystoneS1.zip'
			}
		},
		{
			name: 'Project Amplified',
			icon: '/images/logos/existence-smp-project-amplified-logo.png',
			download: {
				version: '1.15.2',
				title: '.zip (951.6 MB)',
				date: '2020-06-27',
				url: 'https://downloads.existencesmp.com/files/worlds/ExistenceSMPProjectAmplifiedS1.zip'
			}
		}
	];

	const communityWorlds = [
		{
			name: 'Existence SMP Community Server S1',
			icon: '/images/logos/existence-smp-community-server-s1-logo.png',
			download: {
				version: '1.17.1',
				title: '.zip (2.63 GB)',
				date: '2021-12-01',
				url: 'https://downloads.existencesmp.com/files/worlds/ExistenceSMPCommunityS1.zip'
			}
		}
	];
</script>

<div class="wrapper">
	<div class="layout">
		<section>
			<h2>Legacy Worlds</h2>
			<div class="worlds">
				{#each legacyWorlds as world}
					<WorldCard {world} />
				{/each}
			</div>
		</section>

		<section>
			<h2>Project Worlds</h2>
			<div class="worlds">
				{#each projectWorlds as world}
					<WorldCard {world} />
				{/each}
			</div>
		</section>

		<section class="full-width">
			<h2>Community Server Worlds</h2>
			<div class="worlds">
				{#each communityWorlds as world}
					<WorldCard {world} />
				{/each}
			</div>
		</section>
	</div>
</div>

<style lang="scss">
	.wrapper {
		margin-top: 3rem;
	}
	.layout {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 2rem;

		.full-width {
			grid-column: 1 / -1;
		}

		.worlds {
			display: grid;
			grid-gap: 1rem;
		}
	}
	section h2 {
		margin-top: 0;
	}
</style>
