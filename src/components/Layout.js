import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Figure from './Figure'
import "./layout/normalize.css";
import "./layout/layout.css";

export default function Layout({ children }) {

const data = useStaticQuery(graphql`
query {
  sanityHome {
		subTitle
    mainImage {
      asset {
        _id
      }
    }
  }
}
  `);

  return (
    <article>
			<Figure
				className="background"
				id={data.sanityHome.mainImage.asset._id} />
      <header className="nav flex flex-around">
        <Link to="/">
					<h1 className="site-logo">The Foundry</h1>
        </Link>
      </header>
      <main className="layout">
				{children}
			</main>
      <footer>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </footer>
    </article>
  );
}
