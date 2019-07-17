import React from "react";
import SearchBar from "../SearchBar";
import SinglePhoto from "../SinglePhoto";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { AppStyle } from "./style";

const App = () => {
  return (
    <AppStyle>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SearchBar} />
          <Route path="/:id" component={SinglePhoto} />
        </Switch>
      </BrowserRouter>
    </AppStyle>
  );
};

export default App;
