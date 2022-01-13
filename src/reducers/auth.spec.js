import auth from "./auth";
import { logIn, logOut, saveUserInfo } from "../actions";

describe("auth", () => {
  describe("#LOG_IN", () => {
    it("returns isLoggedIn:true and received token", () => {
      expect(auth({}, logIn("token123"))).toEqual({
        isLoggedIn: true,
        token: "token123",
      });
    });
  });

  describe("#LOG_OUT", () => {
    it("returns isLoggedIn:false and empty token", () => {
      expect(auth({}, logOut())).toEqual({ isLoggedIn: false, token: "" });
    });
  });

  describe("#SAVE_USER_INFO", () => {
    it("returns user info", () => {
      expect(
        auth(
          {},
          saveUserInfo({
            email: "email@mail.ru",
            name: "John",
            surname: "Appleseed",
          })
        )
      ).toEqual({
        isLoggedIn: true,
        email: "email@mail.ru",
        name: "John",
        surname: "Appleseed",
      });
    });
  });
});
