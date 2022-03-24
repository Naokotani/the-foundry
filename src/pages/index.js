import * as React from "react";
import { graphql } from "gatsby";
import BlockContent from "@sanity/block-content-to-react";
import serializers from "../components/serializers";
import Layout from '../components/Layout';
import SiteCard from '../components/SiteCard'
import './index.css';
import '../components/siteCard.css';

const HomePage = ({ data }) => {

	const home = data.allSanityHome.edges[0].node;
	console.log(data);

	return (
		<Layout>
			<h1 className="hidden-h1">The Foundry</h1>
			<article className="flex flex-around">
				<blockquote>
				<h1>{home.subTitle}</h1>
					<BlockContent
						blocks={home._rawBody}
						serializers={serializers} />
				</blockquote>
				<article className="card card-transparent-stable">
					<h3>Skillset</h3>
					<ul>
						{home.highlights.map((highlight) => (
							<li>{highlight}</li>
						))}
					</ul>
				</article>
			</article>
			<article className="site-card">
				{home.sites.map((site) => (
					<SiteCard site={site} />
				))}
			</article>
		</Layout>
	);
};

export const query = graphql`
query {
  allSanityHome {
    edges {
      node {
        title
        tab
        subTitle
        sites {
          mainImage {
            asset {
              _id
            }
          }
					slug {
						current
					}
          url
          title
        }
        mainImage {
          asset {
            _id
          }
        }
        _rawBody
        highlights
      }
    }
  }
}
`;

export default HomePage;
