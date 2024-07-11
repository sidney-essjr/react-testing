import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "Javascript"];
  describe("renders correctly", () => {
    it("should render a ul element", () => {
      render(<Skills skills={skills} />);
      const listElement = screen.getByRole("list");
      expect(listElement).toBeInTheDocument();
    });

    it("should render a list of skills with 3 elements", () => {
      render(<Skills skills={skills} />);
      const listItemElement = screen.getAllByRole("listitem");
      expect(listItemElement).toHaveLength(skills.length);
    });
  });
});
