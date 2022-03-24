import React from "react"
import Figure from '../components/Figure';
import Layout from "../components/Layout"
import BlockContent from "@sanity/block-content-to-react";
import serializers from "../components/serializers";
import './site.css';



const SiteTemplate = ({ pageContext }) => {
	const site = pageContext.site;
	console.log(site)
	return (
		<Layout>
			<div>
				<blockquote>
					<h1>{site.title}</h1>
					<div className="site-layout">
						<div className="card">
							<a href={site.url}>
								<Figure id={site.mainImage.asset._id} />
							</a>
						</div>
						<BlockContent
							blocks={site._rawBody}
							serializers={serializers} />
					</div>
				</blockquote>
			</div>
		</Layout>
	)
}

export default SiteTemplate
