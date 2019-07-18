import React, { Component } from "react";
import { connect } from "react-redux";
import { getSinglePhoto } from "../store/photos/photos.action";

import { Loader } from "../List/style";
import { SinglePhotoStyle, PhotoSection, PhotoInfoStyle } from "./style";

const PhotoInfo = props => {
  const history = props.history;
  const { user, links, description } = props.info;

  console.log(user);

  return (
    <PhotoInfoStyle>
      <h1 className="article">Description</h1>
      <p className="description">
        {description ? description : <span>There is no description</span>}
      </p>
      {user && (
        <ul className="uploader-info">
          <li>
            <img
              className="uploader-info__thumbnail"
              src={user.profile_image.medium}
              alt=""
            />
            <p className="uploader-info__name">
              {user.name}
              {user.location && <span>Location: {user.location}</span>}
            </p>
          </li>
          <li>
            <div className="uploader-info__links">
              {user.instagram_username && (
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={`https://www.instagram.com/${user.instagram_username}`}
                >
                  <img
                    src="https://img.icons8.com/ios/50/000000/instagram-new.png"
                    alt=""
                  />
                  @{user.instagram_username}
                </a>
              )}
              <a rel="noopener noreferrer" target="_blank" href={links.html}>
                <img
                  src="https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg"
                  alt=""
                />
                {user.links.html.match(/@.*/i)[0]}
              </a>
            </div>
            {user.bio ? (
              <fieldset>
                <legend>
                  <h1>Bio</h1>
                </legend>
                <p className="uploader-info__bio">{user.bio}</p>
              </fieldset>
            ) : (
              <p className="uploader-info__bio">There is no bio</p>
            )}
          </li>
        </ul>
      )}
      <span onClick={() => history.goBack()} href="#" className="return" />
    </PhotoInfoStyle>
  );
};

class SinglePhoto extends Component {
  componentDidMount() {
    const { params } = this.props.match;

    this.props.getSinglePhoto(params.id);
  }

  render() {
    const { urls } = this.props.photo;

    return (
      <SinglePhotoStyle>
        {!this.props.loading ? (
          <>
            <PhotoSection>
              {urls && (
                <figure className="photo-section__item">
                  <img src={urls.regular} alt="" />
                </figure>
              )}
            </PhotoSection>
            <PhotoInfo history={this.props.history} info={this.props.photo} />
          </>
        ) : (
          <Loader />
        )}
      </SinglePhotoStyle>
    );
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
