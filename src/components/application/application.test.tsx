import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
  describe("renders correctly", () => {
    it("should have rendered a heading level 1", () => {
      render(<Application />);
      const heading1 = screen.getByRole("heading", { level: 1 });
      expect(heading1).toBeInTheDocument();
    });
    it("should have rendered a heading level 2", () => {
      render(<Application />);
      const heading2 = screen.getByRole("heading", { level: 2 });
      expect(heading2).toBeInTheDocument();
    });

    it("should have rendered a textbox with name 'Name'", () => {
      render(<Application />);
      const textbox = screen.getByRole("textbox", { name: "Name" });
      expect(textbox).toBeInTheDocument();
    });

    it("should have rendered a textbox with name 'Bio'", () => {
      render(<Application />);
      const textbox = screen.getByRole("textbox", { name: "Bio" });
      expect(textbox).toBeInTheDocument();
    });

    it("should have rendered a combobox", () => {
      render(<Application />);
      const combobox = screen.getByRole("combobox");
      expect(combobox).toBeInTheDocument();
    });

    it("should have rendered a checkbox", () => {
      render(<Application />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toBeInTheDocument();
    });

    it("should have rendered a button", () => {
      render(<Application />);
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });
  });
});
