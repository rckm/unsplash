import { combineReducers } from "redux";
import photos from "./photos/photos.reducer";

const rootReducer = combineReducers({
  photos
});

export default rootReducer;
