import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { RegistrationWithConnect } from "./Registration";
import { store } from "../redux/store";

describe("RegistrationWithConnect", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RegistrationWithConnect />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );

    expect(getByLabelText("Email")).toHaveAttribute("name", "email");
    expect(getByLabelText("Ваше имя")).toHaveAttribute("name", "name");
    expect(getByLabelText("Ваша фамилия")).toHaveAttribute("name", "surname");
    expect(getByLabelText("Придумайте пароль")).toHaveAttribute("name", "password");
  });
});