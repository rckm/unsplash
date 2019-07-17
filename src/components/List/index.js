import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

import { ListItemStyle } from "./style";

const ListItem = ({ photo }) => {
  return (
    <figure className="photo-item" key={photo.id}>
      <Link to={`/${photo.id}`}>
        <LazyLoadImage
          alt={photo.description}
          effect="opacity"
          src={photo.urls.small}
        />
      </Link>
    </figure>
  );
};

const List = ({ data }) => {
  let items =
    data && data.map(photo => <ListItem key={photo.id} photo={photo} />);

  return <ListItemStyle>{items}</ListItemStyle>;
};

export default List;
