import * as React from 'react';
import Figure from '../components/Figure';
import { Link } from 'gatsby';

const SiteCard = ({ site }) => {

	return (
		<Link to={`/${site.slug.current}`}>
			<article className="card card-transparent">
				<h4>{site.title}</h4>
				<Figure id={site.mainImage.asset._id} />
			</article>
		</Link>
	)
}

export default SiteCard;
