import React, { Component } from "react";
import { connect } from "react-redux";
import { getPhotos } from "../store/photos/photos.action";

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
  console.log(state);
  return {
    loading: state.loading,
    error: state.error,
    photos: state.photos
  };
};

export default connect(
  mapStateToProps,
  { getPhotos }
)(Photos);
