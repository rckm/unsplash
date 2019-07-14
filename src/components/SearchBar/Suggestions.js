import React from "react";

const Suggestions = props => {
  const options =
    props.results.results &&
    props.results.results.map(result => (
      <figure className="photo-item" key={result.id}>
        <img src={result.urls.small} alt={result.description} />
      </figure>
    ));

  return <>{options}</>;
};

export default Suggestions;
