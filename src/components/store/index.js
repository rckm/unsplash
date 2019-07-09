import { createStore, applyMiddleware, compose } from "redux";
import photos from "./photos/photos.reducer";
import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk);

export const store = createStore(
  photos,
  compose(
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
