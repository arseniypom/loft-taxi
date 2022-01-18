import React from "react";
import { Provider } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import { LoginWithConnect } from "./Login";
import { store } from "../redux/store";

describe("LoginWithConnect", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginWithConnect />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );

    expect(getByLabelText("Email")).toHaveAttribute("name", "email");
    expect(getByLabelText("Пароль")).toHaveAttribute("name", "password");
  });
});
