import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

test("renders input with correct placeholder", () => {
  render(<Input value="" onChange={() => {}} placeholder="Enter text" />);
  expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
});

test("calls onChange when input value changes", () => {
  const handleChange = vi.fn();
  render(<Input value="" onChange={handleChange} />);

  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "New value" } });

  expect(handleChange).toHaveBeenCalledTimes(1);
});
