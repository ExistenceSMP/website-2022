export default {
	name: 'component',
	type: 'object',
	title: 'Component',
	fields: [
		{
			name: 'component',
			type: 'string',
			title: 'Pick a component',
			options: {
				list: [
					{
						title: 'Grid with all podcast epidodes',
						value: 'podcasts'
					},
					{
						title: 'Social media',
						value: 'socials'
					},
					{
						title: 'All world downloads',
						value: 'downloads'
					},
					{
						title: 'World progress',
						value: 'world-progress'
					}
				]
			}
		}
	]
};
