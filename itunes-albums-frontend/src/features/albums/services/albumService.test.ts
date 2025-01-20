import { fetchAlbums, filterAlbumsBySearch } from "./albumService";
import { fetchData } from "../../../share/utils/fetchData";
import { getValidToken } from "./loginService";

vi.mock("../../../share/utils/fetchData", () => ({
  fetchData: vi.fn(),
}));

vi.mock("./loginService", () => ({
  getValidToken: vi.fn(),
}));

test("fetchAlbums calls fetchData with correct parameters", async () => {
  const mockData = [
    { albumName: "Album 1", thumbnail: "http://example.com/1.jpg" },
    { albumName: "Album 2", thumbnail: "http://example.com/2.jpg" },
  ];
  const token = "token";
  fetchData.mockResolvedValue(mockData);
  getValidToken.mockResolvedValue(token);

  const albums = await fetchAlbums("Test Artist");
  expect(fetchData).toHaveBeenCalledWith(
    "/albums",
    { artist: "Test Artist" },
    token,
    "GET"
  );
  expect(albums).toEqual(mockData);
});

test("filterAlbumsBySearch filters albums correctly", () => {
  const albums = [
    { albumName: "Test Album 1", thumbnail: "http://example.com/1.jpg" },
    { albumName: "Another Album", thumbnail: "http://example.com/2.jpg" },
  ];
  const filtered = filterAlbumsBySearch(albums, "test");
  expect(filtered).toEqual([
    { albumName: "Test Album 1", thumbnail: "http://example.com/1.jpg" },
  ]);
});
