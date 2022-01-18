import auth from "./auth";
import { logIn, logOut, saveToken } from "../actions";

describe("auth", () => {
  describe("#LOG_IN", () => {
    it("returns isLoggedIn:true and received token", () => {
      expect(auth({}, logIn("token123"))).toEqual({
        isLoggedIn: true,
      });
    });
  });

  describe("#LOG_OUT", () => {
    it("returns isLoggedIn:false and empty token", () => {
      expect(auth({}, logOut())).toEqual({ isLoggedIn: false, token: "" });
    });
  });

  describe("#SAVE_TOKEN", () => {
    it("returns user info", () => {
      expect(auth({}, saveToken("recDrszHlYr5Bd7ZY"))).toEqual({
        token: "recDrszHlYr5Bd7ZY",
      });
    });
  });
});
