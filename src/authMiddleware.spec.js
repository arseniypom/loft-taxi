import { authMiddleware } from "./authMiddleware";
import { authenticate } from "./redux/actions";
import { serverLogIn } from "./api";

jest.mock("./api", () => ({ serverLogIn: jest.fn(() => true) }));

describe("authMiddleware", () => {
  afterAll(jest.clearAllMocks);

  describe("#AUTHENTICATE", () => {
    describe("with correct credentials", () => {
      it("authenticates through api", async () => {
        serverLogIn.mockImplementation(async () => ({
          success: true,
          token: "rec5jE3JjG9KSvRKX",
        }));
        const dispatch = jest.fn();
        const next = jest.fn();

        await authMiddleware({ dispatch })(next)(
          authenticate("email@example.com", "password")
        );
        expect(serverLogIn).toBeCalledWith("email@example.com", "password");
        expect(dispatch).toBeCalledWith({
          type: "SET_LOADING",
          payload: true,
        });
        expect(dispatch).toBeCalledWith({
          type: "SET_LOADING",
          payload: false,
        });
        expect(dispatch).toBeCalledWith({
          type: "LOG_IN",
          payload: "rec5jE3JjG9KSvRKX",
        });
      });
    });
    describe("with wrong credentials", () => {
      it("authenticates through api", async () => {
        serverLogIn.mockImplementation(() => false);
        const dispatch = jest.fn();
        const next = jest.fn();

        await authMiddleware({ dispatch })(next)(
          authenticate("email@example.com", "password11")
        );
        expect(dispatch).not.toBeCalledWith({
          type: "LOG_IN",
          payload: "rec5jE3JjG9KSvRKX",
        });
      });
    });
  });
});
