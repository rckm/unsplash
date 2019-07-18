import React from "react";
import { Link } from "react-router-dom";

import { ListItemStyle } from "./style";

const ListItem = ({ photo }) => {
  return (
    <figure className="photo-item" key={photo.id}>
      <Link to={`/${photo.id}`}>
        <img src={photo.urls.small} alt={photo.description} />
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
