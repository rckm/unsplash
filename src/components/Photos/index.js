import React, { Component } from "react";
import { connect } from "react-redux";
import { getPhotos } from "../store/photos/photos.action";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { Loader, ListItemStyle } from "./styles";

const List = ({ data }) => {
  let items = data.map(photo => <ListItem key={photo.id} photo={photo} />);

  return <ListItemStyle>{items}</ListItemStyle>;
};

const ListItem = ({ photo }) => {
  return (
    <figure className="photo-item" key={photo.id}>
      <LazyLoadImage
        alt={photo.description}
        effect="blur"
        src={photo.urls.small}
      />
    </figure>
  );
};

class Photos extends Component {
  state = {
    count: 100,
    start: 1
  };

  componentDidMount() {
    const { count, start } = this.state;
    this.props.getPhotos(start, count);
  }

  render() {
    const photos = this.props.photos;
    return (
      <React.Fragment>
        {this.props.loading === false ? <List data={photos} /> : <Loader />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { loading, error, photos } = state.photos;
  return {
    loading: loading,
    error: error,
    photos: photos
  };
};

export default connect(
  mapStateToProps,
  { getPhotos }
)(Photos);
