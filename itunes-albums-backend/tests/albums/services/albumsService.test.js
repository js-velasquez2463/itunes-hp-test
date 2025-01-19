/* eslint-disable no-undef */
import httpClient from "../../../src/shared/httpClient";
import {
  fetchAlbumsByArtist,
  getUniqueAlbums,
} from "../../../src/albums/services/albumsService";

jest.mock("../../../src/shared/httpClient.js", () => ({
  default: {
    get: jest.fn(),
  },
  get: jest.fn(),
}));

describe("fetchAlbumsByArtist", () => {
  it("should call the iTunes API with the correct parameters", async () => {
    const mockResponse = {
      data: {
        results: [
          {
            collectionName: "Album 1",
            artworkUrl100: "http://example.com/1.jpg",
          },
        ],
      },
    };

    httpClient.get.mockResolvedValue(mockResponse);

    const artist = "Beatles";
    await fetchAlbumsByArtist(artist);

    expect(httpClient.get).toHaveBeenCalledWith(
      "https://itunes.apple.com/search",
      expect.objectContaining({
        params: {
          term: artist,
          entity: "album",
        },
      })
    );
  });

  it("should return the albums list from the API response", async () => {
    const mockResponse = {
      data: {
        results: [
          {
            collectionName: "Album 1",
            artworkUrl100: "http://example.com/1.jpg",
          },
        ],
      },
    };

    httpClient.get.mockResolvedValue(mockResponse);

    const albums = await fetchAlbumsByArtist("Beatles");

    expect(albums).toEqual(mockResponse.data.results);
    expect(albums.length).toBe(1);
    expect(albums[0].collectionName).toBe("Album 1");
  });

  it("should throw an error if the API call fails", async () => {
    httpClient.get.mockRejectedValue(new Error("Failed to fetch data"));

    try {
      await fetchAlbumsByArtist("Beatles");
    } catch (error) {
      expect(error.message).toBe(
        "Failed to fetch data from iTunes API: Error: Failed to fetch data"
      );
    }
  });
});

describe("getUniqueAlbums", () => {
  it("should return unique albums based on collectionName", () => {
    const albums = [
      { collectionName: "Album 1", artworkUrl100: "http://example.com/1.jpg" },
      { collectionName: "Album 2", artworkUrl100: "http://example.com/2.jpg" },
      { collectionName: "Album 1", artworkUrl100: "http://example.com/1.jpg" },
    ];

    const uniqueAlbums = getUniqueAlbums(albums);

    expect(uniqueAlbums.length).toBe(2);
    expect(uniqueAlbums[0].albumName).toBe("Album 1");
    expect(uniqueAlbums[1].albumName).toBe("Album 2");
  });

  it("should return an empty array if no albums are provided", () => {
    const uniqueAlbums = getUniqueAlbums([]);

    expect(uniqueAlbums).toEqual([]);
  });

  it("should correctly map albums to the expected format", () => {
    const albums = [
      { collectionName: "Album 1", artworkUrl100: "http://example.com/1.jpg" },
    ];

    const uniqueAlbums = getUniqueAlbums(albums);

    expect(uniqueAlbums[0]).toHaveProperty("albumName", "Album 1");
    expect(uniqueAlbums[0]).toHaveProperty(
      "thumbnail",
      "http://example.com/1.jpg"
    );
  });
});
