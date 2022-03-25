import React, { useEffect, useState } from "react";
import { graphql, Link } from "gatsby";
import BlockContent from "@sanity/block-content-to-react";
import serializers from "../components/serializers";
import Layout from '../components/Layout';
import SiteCard from '../components/SiteCard'
import './index.css';
import '../components/siteCard.css';


const HomePage = ({ data }) => {

	const home = data.allSanityHome.edges[0].node;
	const contact = data.sanityContact

	const [highlights, setHighlights] = useState(true);

	const handleResize = () => {
		if (window.innerWidth >= 1000) {
			setHighlights(true);
		} else {
			setHighlights(false);
		}
	}

	useEffect(() => {
		handleResize()
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<Layout>
			<h1 className="hidden-h1">The Foundry</h1>
			<section className="flex flex-around intro-quote">
				<div className="flex intro">
					<blockquote>
						<h1>{home.subTitle}</h1>
						<BlockContent
							blocks={home._rawBody}
							serializers={serializers} />
						<nav>
							<Link to="/contact">
								Contact
							</Link>
							<a href={`https://${contact.linkIn}`}>LinkedIn</a>
							<a href={`https://${contact.Github}`}>Github</a>
						</nav>
					</blockquote>
					{highlights &&
						<aside className="card card-transparent-stable highlights">
							<h3>Skillset</h3>
							<ul>
								{home.highlights.map((highlight) => (
									<li>{highlight}</li>
								))}
							</ul>
						</aside>
					}
				</div>
			</section>
			<section className="site-card">
				{home.sites.map((site) => (
					<SiteCard site={site} />
				))}
			</section>
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
        _rawBody
        highlights
      }
    }
  }
  sanityContact {
    linkIn
    Github
  }
}
`;

export default HomePage;
