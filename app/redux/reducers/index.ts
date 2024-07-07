import { combineReducers } from "redux";
import userReducer from "./userReducer/userReducer";
// Import your reducers here
// import exampleReducer from './exampleReducer';

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
