import React, { Component } from "react";
import { connect } from "react-redux";
import { getSinglePhoto } from "../store/photos/photos.action";

class SinglePhoto extends Component {
  componentDidMount() {
    const { params } = this.props.match;

    this.props.getSinglePhoto(params.id);
  }

  render() {
    console.log(this.props.photo);
    return <div>photo parent</div>;
  }
}

const mapStateToProps = state => {
  const { error, loading, photo } = state.photos;
  return {
    error,
    loading,
    photo
  };
};

export default connect(
  mapStateToProps,
  { getSinglePhoto }
)(SinglePhoto);
