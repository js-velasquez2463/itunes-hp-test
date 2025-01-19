/* eslint-disable no-undef */
import request from "supertest";
import app from "app";
import httpClient from "../../../src/shared/httpClient";

jest.mock("../../../src/shared/httpClient.js", () => ({
  default: {
    get: jest.fn(),
  },
  get: jest.fn(),
  post: jest.fn(),
  interceptors: {
    response: {
      use: jest.fn(),
    },
  },
}));

describe("GET /api/albums", () => {
  it("should return 400 if artist name is missing", async () => {
    const response = await request(app).get("/api/albums");
    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Artist name is required");
  });

  it("should return a list of albums for a valid artist", async () => {
    const mockAlbums = [
      { collectionName: "Album 1", artworkUrl100: "http://example.com/1.jpg" },
      { collectionName: "Album 2", artworkUrl100: "http://example.com/2.jpg" },
    ];

    httpClient.get.mockResolvedValue({
      data: {
        results: mockAlbums,
      },
    });

    const response = await request(app).get("/api/albums?artist=Beatles");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(2);
    expect(response.body[0].albumName).toBe("Album 1");
  });
});
