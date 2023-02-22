import { MOCK_NUMBERS } from "../mocks/phone.mock";
import { updateCreator } from "./phone.actions.creator";
import { phoneReducer } from "./phone.reducer";

describe("Given the phoneReducer function", () => {
  describe("When we load an array of numbers", () => {
    test("Then it should load MOCK_NUMBERS", () => {
      let result = phoneReducer("", updateCreator(MOCK_NUMBERS)); // Por qué me dice que solo le puedo pasar void?
      expect(result).toEqual(MOCK_NUMBERS);
    });
  });
});
