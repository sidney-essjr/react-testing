import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
  const user = userEvent.setup();
  it("should render a heading level 1", () => {
    render(<Counter />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it("should render a button", () => {
    render(<Counter />);
    const button = screen.getByRole("button", { name: "Increment" });
    expect(button).toBeInTheDocument();
  });

  it("should render a count of 0", () => {
    render(<Counter />);
    const initialStateCounter = screen.getByRole("heading");
    expect(initialStateCounter).toHaveTextContent("0");
  });

  it("should render a count 1 after interaction", async () => {
    render(<Counter />);
    // screen.debug()
    const button = screen.getByRole("button", { name: /Increment/ });
    await user.click(button);
    // screen.debug()
    const stateAfterClick = screen.getByRole("heading");
    expect(stateAfterClick).toHaveTextContent("1");
  });

  it("should render a count 2 after of twice interactions", async () => {
    render(<Counter />);
    const button = screen.getByRole("button", {
      name: (content) => content.includes("Increment"),
    });
    await user.dblClick(button);
    // simula clicks com o mouse (soltar e segurar)
    // user.pointer({keys: '[/MouseLeft][MouseRight>]'})
    const stateAfterDblClick = screen.getByRole("heading");
    expect(stateAfterDblClick).toHaveTextContent("2");
  });

  it("should render a count 10 after interactions with input and button elements", async () => {
    render(<Counter />);
    const input = screen.getByRole("spinbutton");
    await user.type(input, "10");
    expect(input).toHaveValue(10);
    const button = screen.getByRole("button", { name: /set/i });
    await user.click(button);
    const count = screen.getByRole("heading", { level: 1 });
    expect(count).toHaveTextContent("10");
  });

  it("must have elements are focused in the rigth order", async () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: /increment/i });
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", { name: /set/i });
    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });

  it("clear", async () => {
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "5");
    expect(amountInput).toHaveValue(5);
  });

  it("selectOptions", async () => {
    render(
      <select multiple>
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </select>,
    );

    const select = screen.getByRole("listbox");

    await user.selectOptions(select, ["1", "C"]);
    const optionA: HTMLOptionElement = screen.getByRole("option", {
      name: "A",
    });
    const optionB: HTMLOptionElement = screen.getByRole("option", {
      name: "B",
    });
    const optionC: HTMLOptionElement = screen.getByRole("option", {
      name: "C",
    });

    expect(optionA.selected).toBe(true);
    expect(optionB.selected).toBe(false);
    expect(optionC.selected).toBe(true);
  });

  it("upload file", async () => {
    render(
      <div>
        <label htmlFor="file-upload">Upload file:</label>
        <input id="file-upload" type="file" />
      </div>,
    );

    const file = new File(["hello"], "hello.png", { type: "image/png" });
    const input: HTMLInputElement = screen.getByLabelText(/upload file/i);
    await user.upload(input, file);
    expect(input.files?.item(0)).toBe(file);
    expect(input.files).toHaveLength(1);
  });

  // user.keyboard('{Shift>}A{/Shift}')se traduz em Shift(down), A, Shift(up)
});
