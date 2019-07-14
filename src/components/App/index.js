import React from "react";
// import Photos from "../Photos";
import SearchBar from "../SearchBar";
import { connect } from "react-redux";
// import { BrowserRouter as Router, Route } from "react-router-dom";

const App = props => {
  return (
    // <Router>
    //   <Route exact path="/" component={App} />
    //   <Route path="/photos" component={Photos} />
    //   <Route path="/search" component={SearchBar} />
    // </Router>
    <>
      <h1 align="center">Unsplash</h1>
      <SearchBar />
    </>
  );
};

const mapStateToProps = state => {
  return {
    searchLoading: state.search.loading,
    searchError: state.search.error,
    results: state.search.results
  };
};

export default connect(mapStateToProps)(App);
