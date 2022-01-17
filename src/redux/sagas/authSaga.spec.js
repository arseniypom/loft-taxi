import { authenticateSaga } from "./authSaga";
import { authenticate } from "../actions";
import { recordSaga } from "./recordSaga";
import { serverLogIn } from "../../api";

jest.mock("../../api");

describe("authSaga", () => {
  describe("#AUTHENTICATE", () => {
    it("authenticates through api", async () => {
      serverLogIn.mockImplementation(async () => ({
        success: true,
        token: "rec5jE3JjG9KSvRKX",
      }));

      const dispatched = await recordSaga(
        authenticateSaga,
        authenticate("email@example.com", "password")
      );

      expect(dispatched).toEqual([
        {
          type: "SET_LOADING",
          payload: true
        },
        {
          type: "SET_LOADING",
          payload: false
        },
        {
          type: "SAVE_TOKEN",
          payload: "rec5jE3JjG9KSvRKX"
        },
        {
          type: "LOG_IN",
          payload:  "rec5jE3JjG9KSvRKX"
        },
      ]);
    });
  });
});
