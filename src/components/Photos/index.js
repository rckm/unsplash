import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { getPhotos } from "../store/photos/photos.action";
// import PhotosContent from "./PhotosContent";

import { Loader, ListItemStyle } from "./styles";

const List = ({ data }) => {
  let items = data.map(photo => <ListItem key={photo.id} photo={photo} />);

  return <ListItemStyle>{items}</ListItemStyle>;
};

const ListItem = ({ photo }) => {
  return (
    <figure className="photo-item" key={photo.id}>
      <img src={photo.urls.small} alt={photo.description} />
    </figure>
  );
};

class Photos extends Component {
  componentDidMount() {
    this.props.getPhotos(1, 50);
  }

  render() {
    return (
      <React.Fragment>
        {this.props.loading === false ? (
          <List data={this.props.photos} />
        ) : (
          <Loader />
        )}
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
