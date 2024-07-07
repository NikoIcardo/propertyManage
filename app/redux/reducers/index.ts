import { combineReducers } from "redux";

import userReducer, { User } from "./userReducer/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
});

export interface RootState {
  user: User;
}

export default rootReducer;
