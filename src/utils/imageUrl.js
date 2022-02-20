import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
	projectId: '5etxyr2d',
	dataset: 'production',
	apiVersion: '2022-02-20', // use current UTC date - see "specifying API version"!
	useCdn: true // `false` if you want to ensure fresh data
});

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export function imageUrl(source) {
	return builder.image(source);
}
