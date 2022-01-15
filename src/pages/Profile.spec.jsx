import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { ProfileWithConnect } from "./Profile";
import { PrivateRoute } from "../PrivateRoute";

describe("ProfileWithConnect", () => {
  it("renders correctly", () => {
    const store = {
      getState: () => ({ auth: { isLoggedIn: true }, creds: {} }),
      subscribe: () => {},
      dispatch: () => {},
    };
    const { getByLabelText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <ProfileWithConnect />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    );

    expect(getByLabelText("Имя владельца")).toHaveAttribute("name", "cardName");
    expect(getByLabelText("Номер карты")).toHaveAttribute("name", "cardNumber");
    expect(getByLabelText("MM/YY")).toHaveAttribute("name", "expiryDate");
    expect(getByLabelText("CVC")).toHaveAttribute("name", "cvc");
  });
});
