import React, { Component } from "react";
import { connect } from "react-redux";
import { getPhotos } from "../store/photos/photos.action";
import List from "../List";

import { Loader } from "../List/style";

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
    const {photos} = this.props;
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
    loading,
    error,
    photos
  };
};

export default connect(
  mapStateToProps,
  { getPhotos }
)(Photos);
