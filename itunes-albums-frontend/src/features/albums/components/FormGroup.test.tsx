import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";
import { FormGroup } from "./FormGroup";

describe("FormGroup", () => {
  it("renders the component with label and button text", () => {
    render(
      <FormGroup
        label="Artist"
        inputValue=""
        onInputChange={() => {}}
        buttonText="Search"
        onButtonClick={() => {}}
      />
    );

    expect(screen.getByText("Artist")).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();
  });

  it("updates the input value on change", () => {
    const onInputChange = vi.fn();
    render(
      <FormGroup
        label="Artist"
        inputValue=""
        onInputChange={onInputChange}
        buttonText="Search"
        onButtonClick={() => {}}
      />
    );

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "New Artist" } });

    expect(onInputChange).toHaveBeenCalledWith("New Artist");
  });

  it("calls onButtonClick when button is clicked", async () => {
    const onButtonClick = vi.fn();
    render(
      <FormGroup
        label="Artist"
        inputValue=""
        onInputChange={() => {}}
        buttonText="Search"
        onButtonClick={onButtonClick}
      />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(onButtonClick).toHaveBeenCalled();
  });

  it('shows "Loading..." text when isLoading is true', () => {
    render(
      <FormGroup
        label="Artist"
        inputValue=""
        onInputChange={() => {}}
        buttonText="Search"
        onButtonClick={() => {}}
        isLoading={true}
      />
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("shows button text when isLoading is false", () => {
    render(
      <FormGroup
        label="Artist"
        inputValue=""
        onInputChange={() => {}}
        buttonText="Search"
        onButtonClick={() => {}}
        isLoading={false}
      />
    );

    expect(screen.getByText("Search")).toBeInTheDocument();
  });
});
