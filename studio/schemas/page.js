export default {
	name: 'page',
	title: 'Page',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string'
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96
			}
		},
		{
			name: 'author',
			title: 'Author',
			type: 'reference',
			to: { type: 'author' }
		},
		{
			name: 'carousel',
			title: 'Has carousel',
			type: 'boolean'
		},
		{
			name: 'color',
			title: 'Theme color (nothing is applied when empty)',
			type: 'string'
		},
		{
			name: 'logo',
			title: 'Logo override SVG (leave empty for default)',
			type: 'string'
		},
		{
			name: 'body',
			title: 'Body',
			type: 'blockContent'
		}
	],

	preview: {
		select: {
			title: 'title',
			author: 'author.name',
			media: 'mainImage'
		},
		prepare(selection) {
			const { author } = selection;
			return Object.assign({}, selection, {
				subtitle: author && `by ${author}`
			});
		}
	}
};
