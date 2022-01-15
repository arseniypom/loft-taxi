import { combineReducers } from "redux";
import loadingReducer from './loader'
import authReducer from "./auth";
import credentialsReducer from "./credentials";

const rootReducer = combineReducers({
  loading: loadingReducer,
  auth: authReducer,
  creds: credentialsReducer,
});

export default rootReducer;
