import { render } from "@testing-library/react";
import { Keyboard } from "./keyboard";
jest.mock("./Keyboard");
describe("Given the keyboard component", () => {
  describe("When it's rendered", () => {
    test("Then it should call the keyboard component", () => {
      render(<Keyboard />);

      expect(Keyboard).toHaveBeenCalled();
    });
  });
});
