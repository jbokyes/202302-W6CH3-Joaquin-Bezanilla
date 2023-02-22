import { render } from "@testing-library/react";
import App from "./App";
jest.mock("./App");
describe("Given the app component", () => {
  describe("When it's rendered", () => {
    test("Then it should contain CardContainer", () => {
      render(<App />);

      expect(App).toHaveBeenCalled();
    });
  });
});
