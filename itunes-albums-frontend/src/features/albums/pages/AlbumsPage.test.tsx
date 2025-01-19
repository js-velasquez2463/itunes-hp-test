import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AlbumsPage from "./AlbumsPage";
import { fetchAlbums, filterAlbumsBySearch } from "../services/albumService";

vi.mock("../services/albumService", () => ({
  fetchAlbums: vi.fn(),
  filterAlbumsBySearch: vi.fn(),
}));

beforeEach(() => {
  vi.clearAllMocks();
});

test("renders page elements", () => {
  render(<AlbumsPage />);
  expect(screen.getByText("Search Albums by Artist")).toBeInTheDocument();
  expect(
    screen.getByPlaceholderText("Enter artist name...")
  ).toBeInTheDocument();
});

test("filters albums based on search input", async () => {
  const mockAlbums = [
    { albumName: "Rock Album", thumbnail: "http://example.com/1.jpg" },
    { albumName: "Pop Album", thumbnail: "http://example.com/2.jpg" },
  ];

  fetchAlbums.mockResolvedValue(mockAlbums);
  filterAlbumsBySearch.mockReturnValue(
    mockAlbums.filter((album) => album.albumName.includes("Rock"))
  );

  render(<AlbumsPage />);

  fireEvent.change(screen.getByPlaceholderText("Enter artist name..."), {
    target: { value: "Artist Name" },
  });

  fireEvent.click(screen.getByText("Search Albums"));

  await waitFor(() => {
    expect(fetchAlbums).toHaveBeenCalledWith("Artist Name");
  });

  fireEvent.change(screen.getByPlaceholderText("Search albums..."), {
    target: { value: "Rock" },
  });

  await waitFor(() => {
    expect(screen.getByText("Rock Album")).toBeInTheDocument();
    expect(screen.queryByText("Pop Album")).not.toBeInTheDocument();
  });

  expect(screen.getByText("Search Albums")).toBeInTheDocument();
});

test("does not fetch albums if no artist is provided", async () => {
  render(<AlbumsPage />);

  fireEvent.click(screen.getByText("Search Albums"));

  expect(fetchAlbums).not.toHaveBeenCalled();
});

test("fetches and displays albums on search", async () => {
  const mockAlbums = [
    { albumName: "Album 1", thumbnail: "http://example.com/1.jpg" },
    { albumName: "Album 2", thumbnail: "http://example.com/2.jpg" },
  ];
  fetchAlbums.mockResolvedValue(mockAlbums);
  filterAlbumsBySearch.mockReturnValue(mockAlbums);

  render(<AlbumsPage />);

  fireEvent.change(screen.getByPlaceholderText("Enter artist name..."), {
    target: { value: "Artist Name" },
  });

  fireEvent.click(screen.getByText("Search Albums"));

  expect(fetchAlbums).toHaveBeenCalledWith("Artist Name");

  await waitFor(() => {
    expect(screen.getByText("Album 1")).toBeInTheDocument();
    expect(screen.getByText("Album 2")).toBeInTheDocument();
  });
});
