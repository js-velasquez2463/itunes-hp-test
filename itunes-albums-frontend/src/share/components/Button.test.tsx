import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

test("calls onClick when clicked", () => {
  const handleClick = vi.fn();

  render(<Button onClick={handleClick}>Click me</Button>);

  const button = screen.getByText("Click me");
  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("disables the button when disabled prop is true", () => {
  const handleClick = vi.fn();

  render(
    <Button onClick={handleClick} disabled>
      Disabled Button
    </Button>
  );

  const button = screen.getByText("Disabled Button");
  fireEvent.click(button);

  expect(handleClick).not.toHaveBeenCalled();
  expect(button).toBeDisabled();
});
