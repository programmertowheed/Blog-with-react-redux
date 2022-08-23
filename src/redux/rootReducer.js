import { combineReducers } from "redux";
import blogs from "./blog/reducer";
import filters from "./filters/reducer";

const rootReducer = combineReducers({
    blogs: blogs,
    filters: filters,
});

export default rootReducer;
