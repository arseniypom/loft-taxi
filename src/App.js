import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { LoginWithConnect } from "./pages/Login";
import { RegistrationWithConnect } from "./pages/Registration";
import { MapWithConnect } from "./pages/Map";
import { ProfileWithConnect } from "./pages/Profile";
import { PrivateRoute } from "./PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginWithConnect />} />
      <Route path="/registration" element={<RegistrationWithConnect />} />
      <Route
        path="/map"
        element={
          <PrivateRoute>
            <MapWithConnect />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <ProfileWithConnect />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))(App);
