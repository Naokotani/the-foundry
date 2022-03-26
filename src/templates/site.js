import React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import Figure from '../components/Figure';
import Layout from "../components/Layout"
import BlockContent from "@sanity/block-content-to-react";
import serializers from "../components/serializers";
import SiteCard from '../components/SiteCard'
import './site.css';



const SiteTemplate = ({ pageContext }) => {
	const site = pageContext.site;

	const data = useStaticQuery(graphql`
query {
  allSanitySite {
    edges {
      node {
        mainImage {
          asset {
            _id
          }
        }
        slug {
          current
        }
        title
        url
				_id
      }
    }
  }
}
  `);

	return (
		<Layout>
			<blockquote className="site-blockquote">
				<h1>{site.title}</h1>
				<div className="site-layout">
					<div className="site-image">
						<a href={`http://${site.url}`}>
							<Figure id={site.mainImage.asset._id} />
						</a>
					</div>
					<BlockContent
						blocks={site._rawBody}
						serializers={serializers} />
				</div>
			</blockquote>
			<section className="site-card">
				{data.allSanitySite.edges.map((s) => {
					return (
						s.node._id !== site._id &&
						<SiteCard site={s.node} />
					)
				})}
			</section>
		</Layout>
	)
}

export default SiteTemplate
