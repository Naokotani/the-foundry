const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions

//Create Pages for shopify
	const sites = await graphql(`
query {
  allSanitySite {
    edges {
      node {
        slug {
          current
        }
        title
        url
        mainImage {
          asset {
            _id
          }
        }
        _rawBody
				_id
      }
    }
  }
}
  `)
	// Iterate over all products and create a new page using a template
	// The product "handle" is generated automatically by Shopify
	sites.data.allSanitySite.edges.forEach(({ node }) => {
		createPage({
			path: `/${node.slug.current}`,
			component: path.resolve(`./src/templates/site.js`),
			context: {
				site: node,
			},
		})
	})
}
