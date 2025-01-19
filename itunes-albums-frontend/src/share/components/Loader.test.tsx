import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

test("renders loader text", () => {
  render(<Loader />);
  expect(screen.getByText("Loading albums...")).toBeInTheDocument();
});
