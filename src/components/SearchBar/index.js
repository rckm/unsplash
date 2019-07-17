import React, { Component } from "react";
import { connect } from "react-redux";
import { getSearchResult } from "../store/search/search.action";

import Suggestions from "./Suggestions";
import Photos from "../Photos";

import { ListItemStyle, Loader } from "../Photos/styles";
import { SearchInput, SearchButton, Form, Error } from "./style";

class SearchBar extends Component {
  state = {
    query: "",
    error: null,
    searching: false
  };

  handleInputChange = e => {
    this.setState({
      query: e.target.value.trim()
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.query === "") {
      this.setState({
        error: "Search field can not be empty! Please enter something"
      });
      return;
    }
    this.setState({
      searching: true,
      error: null
    });
    this.props.getSearchResult(this.state.query);
  };

  render() {
    const { searchLoading, searchError, results } = this.props;
    const { searching, error } = this.state;

    console.log(results);

    const PhotosByQuery = !searchLoading ? (
      <ListItemStyle>
        <Suggestions results={results} />
      </ListItemStyle>
    ) : (
      <Loader />
    );

    return (
      <React.Fragment>
        <Form onSubmit={this.onSubmit}>
          <SearchInput
            onChange={this.handleInputChange}
            id="search"
            type="text"
          />
          <SearchButton>
            <img
              src="https://image.flaticon.com/icons/svg/49/49116.svg"
              alt="search icon"
            />
          </SearchButton>
        </Form>

        {error && <Error>{error}</Error>}

        {searching ? PhotosByQuery : <Photos />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { searchLoading, searchError, results } = state.search;
  return {
    searchLoading: searchLoading,
    searchError: searchError,
    results: results
  };
};

export default connect(
  mapStateToProps,
  { getSearchResult }
)(SearchBar);
