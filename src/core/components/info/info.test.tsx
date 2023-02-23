import { render } from "@testing-library/react";
import { Info } from "./info";
jest.mock("./Info");
describe("Given the keyboard component", () => {
  describe("When it's rendered", () => {
    test("Then it should call the keyboard component", () => {
      render(<Info />);

      expect(Info).toHaveBeenCalled();
    });
  });
});
