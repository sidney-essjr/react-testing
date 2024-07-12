import { render, screen } from "../../test-utils";
import MuiMode from "./MuiMode";

describe("MuiMode", () => {
  it("should render correctly", () => {
    render(<MuiMode />);
    const mode = screen.getByRole("heading");
    expect(mode).toHaveTextContent("dark mode");
  });
});
