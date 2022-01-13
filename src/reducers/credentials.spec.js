import credentials from "./credentials";
import { saveCredentials } from "../actions";

describe("credentials", () => {
  describe("#SAVE_CREDENTIALS", () => {
    it("returns user billing info", () => {
      expect(
        credentials(
          {},
          saveCredentials({
            cardNumber: "1234 1234 1234 1234",
            expiryDate: "03/05",
            cardName: "John Appleseed",
            cvc: "123",
          })
        )
      ).toEqual({
        cardNumber: "1234 1234 1234 1234",
        expiryDate: "03/05",
        cardName: "John Appleseed",
        cvc: "123",
      });
    });
  });
});
