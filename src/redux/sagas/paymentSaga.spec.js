import { updateCredentialsSaga } from "./paymentSaga";
import { updateCredentials } from "../actions";
import { recordSaga } from "./recordSaga";
import { serverSendCredentials } from "../../api";

jest.mock("../../api");

describe("paymentSaga", () => {
  describe("#UPDATE_CREDENTIALS", () => {
    it("updates billing info through api", async () => {
      serverSendCredentials.mockImplementation(async () => ({
        success: true,
      }));

      const dispatched = await recordSaga(
        updateCredentialsSaga,
        updateCredentials({
          cardNumber: "0000 0000 0000 0000",
          expiryDate: "03/29",
          cardName: "John Smith",
          cvc: "123",
          token: "rec5jE3JjG9KSvRKX"
        })
      );

      expect(dispatched).toEqual([
        {
          type: "SAVE_CREDENTIALS",
          payload: {
            cardNumber: "0000 0000 0000 0000",
            expiryDate: "03/29",
            cardName: "John Smith",
            cvc: "123",
          },
        },
      ]);
    });
  });
});
