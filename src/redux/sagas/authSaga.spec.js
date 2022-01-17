import { authenticateSaga } from "./authSaga";
import { authenticate } from "../actions";
import { recordSaga } from "./recordSaga";

jest.mock("../../api", () => ({
  serverLogIn: jest.fn(() => ({
    success: true,
    token: "rec5jE3JjG9KSvRKX",
  })),
}));

describe("authSaga", () => {
  describe("#AUTHENTICATE", () => {
    it("authenticates through api", async () => {
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
          type: "LOG_IN",
          payload:  "rec5jE3JjG9KSvRKX"
        },
      ]);
    });
  });
});
