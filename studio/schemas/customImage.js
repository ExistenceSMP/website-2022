export default {
	name: 'customImage',
	type: 'object',
	title: 'Image embed',
	fields: [
		{
			name: 'url',
			type: 'url',
			title: "URL pointing to the image"
		},
		{
			name: 'alt',
			type: 'string',
			title: "Image alt text"
		}
	]
};
