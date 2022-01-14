import { combineReducers } from "redux";
import authReducer from "./auth";
import credentialsReducer from "./credentials";

const rootReducer = combineReducers({
  auth: authReducer,
  creds: credentialsReducer,
});

export default rootReducer;
