import React, { Component } from "react";
import { connect } from "react-redux";
import { getPhotos } from "../store/photos/photos.action";

import { Loader } from "./styles";

const List = ({ data }) => {
  let items = data.map(photo => <ListItem key={photo.id} photo={photo} />);

  return <div>{items}</div>;
};

const ListItem = ({ photo }) => {
  return (
    <div key={photo.id}>
      <img src={photo.urls.small} alt={photo.description} />
    </div>
  );
};

class Photos extends Component {
  componentDidMount() {
    this.props.getPhotos(1, 20);
  }

  render() {
    return (
      <div>
        {this.props.loading === false ? (
          <List data={this.props.photos} />
        ) : (
          <Loader />
        )}
      </div>
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
