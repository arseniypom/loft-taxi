import addresses from "./addresses";
import { fetchAddressListSuccess, fetchAddressListError } from "../actions";

describe("addresses", () => {
  describe("#FETCH_ADDRESS_LIST_SUCCESS", () => {
    it("sets the list of fetched addresses", () => {
      expect(
        addresses({}, fetchAddressListSuccess(["Пулково (LED)", "Эрмитаж"]))
      ).toEqual({
        list: ["Пулково (LED)", "Эрмитаж"],
      });
    });
  });

  describe("#FETCH_ADDRESS_LIST_ERROR", () => {
    it("sets the error if fetch was unsuccessful", () => {
      expect(addresses({}, fetchAddressListError())).toEqual({
        error: true,
      });
    });
  });
});
