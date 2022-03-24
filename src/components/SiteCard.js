import * as React from 'react';
import Figure from '../components/Figure';
import './siteCard.css';
import { Link } from 'gatsby';

const SiteCard = ({ site }) => {

	console.log(site);

	return (
		<Link to={`/${site.slug.current}`}>
			<article className="card">
				<h3>{site.title}</h3>
				<Figure id={site.mainImage.asset._id} />
			</article>
		</Link>
	)
}

export default SiteCard;
