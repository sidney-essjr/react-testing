import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CounterTwo from "./CounterTwo";

describe("Counter Two", () => {
  it("should render correctly", () => {
    render(<CounterTwo count={0} />);
    const heading = screen.getByRole("heading", { name: /counter two/i });
    expect(heading).toBeInTheDocument();
  });

  it("handlers are called", async () => {
    const handleIncrement = jest.fn();
    const handleDecrement = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      />
    );
    const incrementButton = screen.getByRole("button", { name: /increment/i });
    const decrementButton = screen.getByRole("button", { name: /decrement/i });
    await userEvent.click(incrementButton);
    await userEvent.click(decrementButton);
    expect(handleIncrement).toHaveBeenCalledTimes(1);
    expect(handleDecrement).toHaveBeenCalledTimes(1);
  });
});
