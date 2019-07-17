import React from "react";
import SearchBar from "../SearchBar";
import { connect } from "react-redux";
// import { BrowserRouter as Router, Route } from "react-router-dom";

import { AppStyle } from "./style";

const App = props => {
  return (
    // <Router>
    //   <Route exact path="/" component={App} />
    //   <Route path="/photos" component={Photos} />
    //   <Route path="/search" component={SearchBar} />
    // </Router>
    <AppStyle>
      <h1 className="title">Unsplash</h1>
      <SearchBar />
    </AppStyle>
  );
};

const mapStateToProps = state => {
  const { loading, error, results } = state.search;
  return {
    searchLoading: loading,
    searchError: error,
    results: results
  };
};

export default connect(mapStateToProps)(App);
