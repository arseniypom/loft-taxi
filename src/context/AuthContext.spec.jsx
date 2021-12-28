import React from "react";
import { AuthProvider, AuthContext } from "./AuthContext";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("AuthContext", () => {
  describe("#login", () => {
    it("sets 'isLoggedIn' to false", () => {
      let isLoggedIn;
      let login;

      render(
        <AuthProvider>
          <AuthContext.Consumer>
            {(value) => {
              isLoggedIn = value.isLoggedIn;
              login = value.login;
              return null;
            }}
          </AuthContext.Consumer>
        </AuthProvider>
      );

      expect(isLoggedIn).toBe(false);
      act(() => {
        login("1", "1");
      })
      expect(isLoggedIn).toBe(true);
    });
  });

  describe("#logout", () => {
    it("sets 'isLoggedIn' to false", () => {
      let isLoggedIn;
      let logout;
      let login;

      render(
        <AuthProvider>
          <AuthContext.Consumer>
            {(value) => {
              logout = value.logout;
              login = value.login;
              isLoggedIn = value.isLoggedIn;
              return null;
            }}
          </AuthContext.Consumer>
        </AuthProvider>
      );

      act(() => {
        login("1", "1");
        logout();
      });

      expect(isLoggedIn).toBe(false);
    });
  });
});
