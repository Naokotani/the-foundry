import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Figure from './Figure'
import "./layout/normalize.css";
import "./layout/layout.css";

export default function Layout({ children }) {

	const data = useStaticQuery(graphql`
query {
  sanityHome {
    background {
      asset {
        _id
      }
    }
    highResBackground {
      asset {
        _id
      }
    }
    cellBackground {
      asset {
        _id
      }
    }
  }
}
  `);

	const [scroll, setScroll] = useState(false);
	const [highRes, setHighRes] = useState(false);
	const [small, setSmall] = useState(false);

	const handleScroll = () => {
		if (window.scrollY >= 50) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	}

	const handleResize = () => {
		if (window.innerWidth >= 1921) {
			setHighRes(true);
		} else {
			setHighRes(false);
		}

		if (window.innerWidth < 768) {
			setSmall(true);
		} else {
			setSmall(false);
		}
	}

	useEffect(() => {
		handleScroll();
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<aside>
			{!small?
			<div className="background">
				<Figure
					id={highRes ? data.sanityHome.highResBackground.asset._id :
						data.sanityHome.background.asset._id
					} />
			</div>:
			<div className="background">
				<Figure
					id={data.sanityHome.cellBackground.asset._id} />
			</div>
			}
			<header
				className={scroll ?
					'nav flex flex-around scroll-down' :
					'nav flex flex-around scroll-top'
				}>
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
					<Link to="/contact">Contact</Link>
					<br/>
					<small>&copy; 2022 The Foundry</small>
				</nav>
			</footer>
		</aside>
	);
}
