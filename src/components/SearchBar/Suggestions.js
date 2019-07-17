import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const Suggestions = props => {
  const options =
    props.results &&
    props.results.map(result => (
      <figure className="photo-item" key={result.id}>
        <LazyLoadImage
          alt={result.description}
          effect="opacity"
          src={result.urls.small}
        />
      </figure>
    ));

  return <React.Fragment>{options}</React.Fragment>;
};

export default Suggestions;
