<script>
	import ExternalLink from '$lib/util/ExternalLink.svelte';
	import WorldCard from '$lib/util/WorldCard.svelte';

	const communityWorlds = [
		{
			name: 'Community Server 1',
			icon: '/images/logos/existence-smp-community-server-s1-logo.png',
			download: {
				version: '1.17.1',
				title: '.zip (2.63 GB)',
				date: '2021-12-01',
				url: 'https://drive.google.com/file/d/140VNH39Hk63Rj6R35dYt-ONmRwEIkYej/view?usp=drive_link'
			}
		},
		{
			name: 'Community Server 2',
			icon: '/images/logos/existence-smp-community-server-s2-logo.png',
			download: {
				version: '1.20.4',
				title: '.zip (5.7 GB)',
				date: '2024-07-21',
				url: 'https://drive.google.com/file/d/1aYbRpMI8u9VrimzbiBSjEDPVvbjJv8B6/view?usp=drive_link'
			}
		}
	];

	const legacyWorlds = [
		{
			name: 'Legacy S1',
			icon: '/images/logos/existence-s1-logo.png',
			download: {
				version: '1.12.2',
				title: '.zip (2.61 GB)',
				date: '2017-08-04',
				url: 'https://drive.google.com/file/d/1l_4cOx9fu0Y78DUy5TX2kO-_GgbroctU/view?usp=drive_link'
			}
		},
		{
			name: 'Legacy S2',
			icon: '/images/logos/existence-s2-logo.png',
			download: {
				version: '1.13.2',
				title: '.zip (2.59 GB)',
				date: '2019-03-16',
				url: 'https://drive.google.com/file/d/16iE89Ej2ckLlFrzHK-XftryyJsfA77fR/view?usp=drive_link'
			}
		},
		{
			name: 'Legacy S3',
			icon: '/images/logos/existence-s3-logo.png',
			download: {
				version: '1.15.2',
				title: '.zip (2.15 GB)',
				date: '2020-03-18',
				url: 'https://drive.google.com/file/d/1BwZlI2EcmZ2mn1mqwF7BJdH6Keg-zbC2/view?usp=drive_link'
			}
		}
	];

	const projectWorlds = [
		{
			name: 'Project Hardcore',
			icon: '/images/logos/existence-project-hardcore-s1-logo.png',
			download: {
				version: '1.13.2',
				title: '.zip (148 MB)',
				date: '2019-04-24',
				url: 'https://drive.google.com/file/d/1SRm3PU2S1oyBfVhK8YQWBUo4Dr6ycVDt/view?usp=drive_link'
			}
		},
		{
			name: 'Project Keystone',
			icon: '/images/logos/existence-project-keystone-logo.png',
			download: {
				version: '1.15.2',
				title: '.zip (3.4 GB)',
				date: '2020-06-27',
				url: 'https://drive.google.com/file/d/1AUTilIodIeoKT0FG7lZgmNwpJ1-gI7JG/view?usp=drive_link'
			}
		},
		{
			name: 'Project Amplified',
			icon: '/images/logos/existence-smp-project-amplified-logo.png',
			download: {
				version: '1.18.1',
				title: '.zip (951.6 MB)',
				date: '2022-03-16',
				url: 'https://drive.google.com/file/d/1lasla1xW-pN-3VHrhqpESQge0FJRzr43/view?usp=drive_link'
			}
		},
		{
			name: 'Project Create',
			icon: '/images/logos/existence-smp-project-create-logo.png',
			download: {
				version: '1.18.2 (Modded)',
				title: '.zip (1.9 GB)',
				date: '2023-06-05',
				url: 'https://drive.google.com/file/d/1S8rED3Bor2KhPSqrTYcpNsNHs5RuW4WF/view?usp=drive_link'
			}
		}
	];

	const modpacks = [
		{
			name: 'Project Create',
			icon: '/images/logos/existence-smp-project-create-logo.png',
			download: {
				version: '1.18.2 (Modded - Bundled)',
				title: '.mrpack (2.2 GB)',
				date: '2023-06-05',
				url: 'https://drive.google.com/file/d/1yo5gCe8kZXTfynVIPtteEwqTOI62rnJc/view?usp=drive_link'
			}
		},
		{
			name: 'Project Better Than Adventure',
			icon: '/images/logos/existence-smp-project-bta-logo.png',
			download: {
				version: 'Beta 1.7.3 (Modded - Bundled)',
				title: '.zip* (984.5 MB)',
				date: '2024-06-17',
				url: 'https://drive.google.com/file/d/12Ta9JTfxDhtecv5iNWxShAQiyeUgtzKY/view?usp=drive_link'
			}
		},
		{
			name: 'Project New Dawn',
			icon: '/images/logos/existence-logo-new-dawn.png',
			download: {
				version: '1.21.3 (Modded - Bundled)',
				title: '.zip* (5.87 GB)',
				date: '2025-04-19',
				url: 'https://drive.google.com/file/d/1eFf6_6YLaeBjV3vTqsinqH1_b_u8dQrQ/view?usp=drive_link'
			}
		}
	];
</script>

<div class="wrapper">
	<div class="layout">
		<section>
			<h2>Community Server Worlds</h2>
			<div class="worlds">
				{#each communityWorlds as world}
					<WorldCard {world} />
				{/each}
			</div>
		</section>

		<section>
			<h2>Legacy Worlds</h2>
			<div class="worlds">
				{#each legacyWorlds as world}
					<WorldCard {world} />
				{/each}
			</div>
		</section>

		<section class="full-width">
			<h2>Project Worlds</h2>
			<div class="worlds">
				{#each projectWorlds as world}
					<WorldCard {world} />
				{/each}
			</div>
			<p>
				<i>Some Project Worlds are only available in bundled Modpacks below.</i>
			</p>
		</section>

		<section class="full-width">
			<h2>Modpacks</h2>
			<div class="worlds">
				{#each modpacks as world}
					<WorldCard {world} download={'modpack'} />
				{/each}
			</div>
			<p>
				<i>*Prism Launcher Instance</i>
			</p>
		</section>

		<section class="full-width">
			<h2>Branding Assets</h2>
			<ExternalLink href="/downloads/assets" target="_blank">Google Drive</ExternalLink>
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

	@media (max-width: 900px) {
		.layout {
			grid-template-columns: 1fr;
		}
	}
</style>
