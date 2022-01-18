import { combineReducers } from "redux";
import loadingReducer from './loader'
import authReducer from "./auth";
import credentialsReducer from "./credentials";
import addressesReducer from "./addresses";
import routeReducer from "./route";

const rootReducer = combineReducers({
  loading: loadingReducer,
  auth: authReducer,
  creds: credentialsReducer,
  addresses: addressesReducer,
  route: routeReducer,
});

export default rootReducer;
