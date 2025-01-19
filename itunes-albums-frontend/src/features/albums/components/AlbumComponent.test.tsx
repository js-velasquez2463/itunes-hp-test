import { render, screen } from "@testing-library/react";
import AlbumComponent from "./AlbumComponent";

test("renders album name and thumbnail", () => {
  render(
    <AlbumComponent
      albumName="Test Album"
      thumbnail="http://example.com/test.jpg"
    />
  );

  expect(screen.getByText("Test Album")).toBeInTheDocument();
  const img = screen.getByAltText("Test Album");
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute("src", "http://example.com/test.jpg");
});
