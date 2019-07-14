import React, { Component } from "react";
import { connect } from "react-redux";
import { getSearchResult } from "../store/search/search.action";
import { ListItemStyle } from "../Photos/styles";
import Suggestions from "./Suggestions";
import Photos from "../Photos";

import { SearchInput, SearchButton, Form } from "./style";

class SearchBar extends Component {
  state = {
    query: "",
    searching: false
  };

  handleInputChange = e => {
    this.setState({
      query: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      searching: true
    });
    this.props.getSearchResult(this.state.query, 1, 20);
  };

  render() {
    const { searching } = this.state;
    return (
      <React.Fragment>
        <Form onSubmit={this.onSubmit}>
          <SearchInput
            onChange={this.handleInputChange}
            id="search"
            type="text"
          />
          <SearchButton>Search</SearchButton>
        </Form>
        {searching ? (
          <ListItemStyle>
            <Suggestions results={this.props.results} />
          </ListItemStyle>
        ) : (
          <Photos />
        )}
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
