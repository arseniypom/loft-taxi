import { addressListSaga } from "./addressListSaga";
import { fetchAddressList } from "../actions";
import { recordSaga } from "./recordSaga";
import { serverGetAddressList } from "../../api";

jest.mock("../../api");

describe("addressListSaga", () => {
  describe("#FETCH_ADDRESS_LIST", () => {
    it("gets addresses list through api", async () => {
      serverGetAddressList.mockImplementation(async () => ({
        addresses: ["Пулково (LED)", "Эрмитаж"],
      }));

      const dispatched = await recordSaga(addressListSaga, fetchAddressList());

      expect(dispatched).toEqual([
        {
          type: "SET_LOADING",
          payload: true,
        },
        {
          type: "SET_LOADING",
          payload: false,
        },
        {
          type: "FETCH_ADDRESS_LIST_SUCCESS",
          payload: ["Пулково (LED)", "Эрмитаж"],
        },
      ]);
    });
  });
});
