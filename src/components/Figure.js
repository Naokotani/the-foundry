import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";

const Figure = ({ node, id, className="", alt="" }) => {
  const imageRef = node ? node.asset._ref : id;

  const sanityConfig = { projectId: "bk2ka50u", dataset: "production" };

	const image = getGatsbyImageData(imageRef, { maxWidth: 1024 }, sanityConfig);

  return (
    <figure>
      <GatsbyImage className={className} image={image} alt={alt} />
      {node && <figcaption>{node.caption}</figcaption>}
    </figure>
  );
};

export default Figure;
