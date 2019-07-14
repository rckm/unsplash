import { combineReducers } from "redux";
import photos from "./photos/photos.reducer";
import search from "./search/search.reducer";

const rootReducer = combineReducers({
  photos,
  search
});

export default rootReducer;
