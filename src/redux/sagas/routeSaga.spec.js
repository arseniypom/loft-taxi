import { routeSaga } from "./routeSaga";
import { getRouteSuccess, getRouteError, getRoute } from "../actions";
import { recordSaga } from "./recordSaga";
import { serverGetRouteCoordinates } from "../../api";

jest.mock("../../api");

describe("routeSaga", () => {
  describe("#GET_ROUTE", () => {
    it("gets route through api", async () => {
      serverGetRouteCoordinates.mockImplementation(async () => [
        [30.296064, 59.926102],
        [30.295998, 59.926178],
      ]);

      const dispatched = await recordSaga(
        routeSaga,
        getRoute({ from: "x", to: "y" })
      );

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
          type: "GET_ROUTE_SUCCESS",
          payload: [
            [30.296064, 59.926102],
            [30.295998, 59.926178],
          ],
        },
      ]);
    });
  });
});
