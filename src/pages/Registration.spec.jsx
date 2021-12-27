import React from "react";
import { RegistrationWithAuth } from "./Registration";
import { render } from "@testing-library/react";

describe("RegistrationWithAuth", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(<RegistrationWithAuth />);

    expect(getByLabelText("Email")).toHaveAttribute("name", "email");
    expect(getByLabelText("Как Вас зовут?")).toHaveAttribute("name", "name");
    expect(getByLabelText("Придумайте пароль")).toHaveAttribute("name", "password");
  });
});