import React from "react";
import "./App.css";
import { WithAuth } from "./context/AuthContext";
import { LoginWithAuth } from "./pages/Login";
import { RegistrationWithAuth } from "./pages/Registration";
import { MapWithAuth } from "./pages/Map";
import { ProfileWithAuth } from "./pages/Profile";

function App({ isLoggedIn }) {
  const [currentPage, setCurrentPage] = React.useState("login");

  const navigateTo = (page) => {
    if (isLoggedIn) {
      setCurrentPage(page);
    } else {
      if (page === 'login' || page === 'registration') {
        setCurrentPage(page);
      } else {
        setCurrentPage('login');
      }
    }
  };
  return (
    <>
      {
        {
          login: <LoginWithAuth navigateTo={navigateTo} />,
          registration: <RegistrationWithAuth navigateTo={navigateTo} />,
          profile: <ProfileWithAuth navigateTo={navigateTo} />,
          map: <MapWithAuth navigateTo={navigateTo} />,
        }[currentPage]
      }
    </>
  );
}

export default WithAuth(App);
