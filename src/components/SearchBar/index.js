import React, { Component } from "react";
import { connect } from "react-redux";
import { getSearchResult, querySearch } from "../store/search/search.action";

import List from "../List";
import Photos from "../Photos";

import { Loader } from "../List/style";
import { FormInput, FormButton, Form, Error, Title } from "./style";

class SearchBar extends Component {
  state = {
    error: null,
    searching: false
  };

  handleInputChange = e => {
    this.props.querySearch(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.props.query === "") {
      this.setState({
        error: "Search field can not be empty! Please enter something"
      });
      return;
    }
    this.setState({
      searching: true,
      error: null
    });
    this.props.getSearchResult(this.props.query);
  };

  render() {
    const { loading, photos, query } = this.props;
    const { searching, error } = this.state;

    const PhotosByQuery = !loading ? <List data={photos} /> : <Loader />;

    return (
      <section>
        <Title className="title">Unsplash</Title>
        <Form onSubmit={this.onSubmit}>
          <FormInput
            onChange={this.handleInputChange}
            id="search"
            type="text"
            value={query}
          />
          <FormButton>
            <img
              src="https://image.flaticon.com/icons/svg/49/49116.svg"
              alt="search icon"
            />
          </FormButton>
        </Form>

        {error && <Error>{error}</Error>}

        {searching ? PhotosByQuery : <Photos />}
      </section>
    );
  }
}

const mapStateToProps = state => {
  const { loading, error, photos, query } = state.photos;
  return {
    loading,
    error,
    photos,
    query
  };
};

export default connect(
  mapStateToProps,
  { getSearchResult, querySearch }
)(SearchBar);
