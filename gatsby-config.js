module.exports = {
  siteMetadata: {
    title: `The Foundry`,
    siteUrl: `https://profile.chrisfoundry.com`
  },
  plugins: [
		"gatsby-plugin-image",
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images/`,
			},
		},
		`@sanity/block-content-to-react`,
		
		{
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": "bk2ka50u",
      "dataset": "production",
			watchMode: true,
			overlayDrafts: true,
    }
  }]
};
