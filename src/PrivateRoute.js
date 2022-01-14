import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

export const PrivateRoute = connect((state) => ({
  isLoggedIn: state.auth.isLoggedIn,
}))(({ children, isLoggedIn, ...rest }) =>
  isLoggedIn ? children : <Navigate to="/" />
);
