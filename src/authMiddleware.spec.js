import { authMiddleware } from "./authMiddleware";
import { authenticate } from "./actions";
import { serverLogIn } from "./api";

jest.mock("./api", () => ({ serverLogIn: jest.fn(() => true) }));

describe("authMiddleware", () => {
  afterAll(jest.clearAllMocks)

  describe("#AUTHENTICATE", () => {
    describe("with correct credentials", () => {
      it("authenticates through api", async () => {
        serverLogIn.mockImplementation(async () => true);
        const dispatch = jest.fn();

        await authMiddleware({ dispatch })()(
          authenticate("email@example.com", "password")
        );
        expect(serverLogIn).toBeCalledWith("email@example.com", "password");
        expect(dispatch).toBeCalledWith({
          type: "LOG_IN",
        });
      });
    });
    describe("with wrong credentials", () => {
      it("authenticates through api", async () => {
        serverLogIn.mockImplementation(() => false);
        const dispatch = jest.fn();

        await authMiddleware({ dispatch })()(
          authenticate("testlogin", "testpassword")
        );
        expect(dispatch).not.toBeCalled();
      });
    });
  });
});
