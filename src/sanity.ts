import sanityClient from '@sanity/client';

const client = sanityClient({
	projectId: '7xky16ak',
	dataset: 'production',
	apiVersion: new Date().toISOString().split('T')[0], // use current UTC date - see "specifying API version"!
	token: '', // or leave blank for unauthenticated usage
	useCdn: true // `false` if you want to ensure fresh data
});

export default client;
