import { render } from "@testing-library/react";
import { Key } from "./key";
jest.mock("./Key");
describe("Given the key component", () => {
  describe("When it's rendered", () => {
    test("Then it should call the keyboard component", () => {
      render(<Key />);

      expect(Key).toHaveBeenCalled();
    });
  });
});
