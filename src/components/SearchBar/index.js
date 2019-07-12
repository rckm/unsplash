import React, { Component } from "react";
import { connect } from "react-redux";
import { getSearchResult } from "../store/search/search.action";

import { SearchInput } from "./style";

const Suggestions = props => {
  const options = props.results.map(result => (
    <li key={result.id}>{result.links.html}</li>
  ));

  return <ul>{options}</ul>;
};

class SearchBar extends Component {
  state = {
    query: ""
  };

  handleInputChange = e => {
    this.setState(
      {
        query: e.target.value
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.props.getSearchResult(this.state.query, 1, 10);
          }
        } else if (!this.state.query) {
        }
      }
    );
  };

  render() {
    return (
      <>
        <form>
          <SearchInput
            onChange={this.handleInputChange}
            id="search"
            type="text"
          />
        </form>
        {this.props.results ? (
          <Suggestions results={this.props.results} />
        ) : (
          "Searching..."
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    loading: state.search.loading,
    error: state.search.error,
    results: state.search.results
  };
};

export default connect(
  mapStateToProps,
  { getSearchResult }
)(SearchBar);
