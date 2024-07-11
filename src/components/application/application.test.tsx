import { logRoles, render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
  describe("renders correctly", () => {
    it("should have rendered a heading level 1", () => {
      render(<Application loading={false} />);
      const heading1 = screen.getByRole("heading", { level: 1 });
      expect(heading1).toBeInTheDocument();
    });
    it("should have rendered a heading level 2", () => {
      render(<Application loading={false} />);
      const heading2 = screen.getByRole("heading", { level: 2 });
      expect(heading2).toBeInTheDocument();
    });

    it("should have render a paragraph", () => {
      render(<Application loading={false} />);
      const p1 = screen.getByText(/mandatory/);
      const p2 = screen.getByText("mandatory", { exact: false });
      const p3 = screen.getByText((content) => content.includes("mandatory"));
      expect(p1).toBeInTheDocument();
      expect(p2).toBeInTheDocument();
      expect(p3).toBeInTheDocument();
    });

    it("should not render the form", () => {
      // screen.debug()
      render(<Application loading={true} />);
      // screen.debug()
      const form = screen.queryByRole("form");
      expect(form).not.toBeInTheDocument();
    });

    it("should have rendered a textbox with name 'Name'", () => {
      render(<Application loading={false} />);
      const textbox = screen.getByRole("textbox", { name: "Name" });
      expect(textbox).toBeInTheDocument();
    });

    it("should have rendered a textbox with name 'Bio'", () => {
      render(<Application loading={false} />);
      const textbox = screen.getByRole("textbox", { name: "Bio" });
      expect(textbox).toBeInTheDocument();
    });

    it("should have rendered a combobox", () => {
      render(<Application loading={false} />);
      const combobox = screen.getByRole("combobox");
      expect(combobox).toBeInTheDocument();
    });

    it("should have rendered a checkbox", () => {
      render(<Application loading={false} />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toBeInTheDocument();
    });

    it("should have rendered a button", () => {
      const view = render(<Application loading={false} />);
      // permite a visualização dos elementos da arvore DOM classificados por roles
      logRoles(view.container); 
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });
  });
});
