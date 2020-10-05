import { render } from "@testing-library/react";
import App from "../pages/index";

describe("App", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<App />);
    // expect(getByText("Latest posts")).toBeInTheDocument();
  });
});
