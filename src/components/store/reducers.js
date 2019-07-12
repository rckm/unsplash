import { combineReducers } from "redux";
import photos from "./photos/photos.reducer";
import search from "./search/search.reducer";

export default combineReducers({
  photos,
  search
});
