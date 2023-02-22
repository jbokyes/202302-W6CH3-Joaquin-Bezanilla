import { render } from "@testing-library/react";
import { Actions } from "./actions";
jest.mock("./Actions");
describe("Given the keyboard component", () => {
  describe("When it's rendered", () => {
    test("Then it should call the actions component", () => {
      render(<Actions />);

      expect(Actions).toHaveBeenCalled();
    });
  });
});
