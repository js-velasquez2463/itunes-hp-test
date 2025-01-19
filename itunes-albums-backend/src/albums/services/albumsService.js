import httpClient from "../../shared/httpClient.js";

const ITUNES_BASE_URL =
  // eslint-disable-next-line no-undef
  process.env.ITUNES_API_URL || "https://itunes.apple.com";
const ALBUM_ENTITY = "album";

export const fetchAlbumsByArtist = async (artist) => {
  try {
    const response = await httpClient.get(`${ITUNES_BASE_URL}/search`, {
      params: {
        term: artist,
        entity: ALBUM_ENTITY,
      },
    });

    return response.data.results;
  } catch (error) {
    throw new Error(`Failed to fetch data from iTunes API: ${error}`);
  }
};

export const getUniqueAlbums = (albums) => {
  const uniqueAlbums = [];
  const albumNames = new Set();

  for (const album of albums) {
    if (!albumNames.has(album.collectionName)) {
      albumNames.add(album.collectionName);
      uniqueAlbums.push({
        albumName: album.collectionName,
        thumbnail: album.artworkUrl100,
      });
    }
  }

  return uniqueAlbums;
};
