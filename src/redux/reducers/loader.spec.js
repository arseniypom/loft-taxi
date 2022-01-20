import loader from "./loader";
import { setLoading } from "../actions";

describe("loader", () => {
  describe("#SET_LOADING", () => {
    it("sets isLoading to true/false", () => {
      expect(loader({}, setLoading(true))).toEqual({ isLoading: true });
    });
  });
});
