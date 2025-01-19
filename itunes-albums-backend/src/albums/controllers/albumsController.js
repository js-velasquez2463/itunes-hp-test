import {
  fetchAlbumsByArtist,
  getUniqueAlbums,
} from "../services/albumsService.js";

export const getAlbums = async (req, res) => {
  const { artist } = req.query;

  if (!artist) {
    return res.status(400).json({ error: "Artist name is required" });
  }

  try {
    const albums = await fetchAlbumsByArtist(artist);
    const uniqueAlbums = getUniqueAlbums(albums);

    res.status(200).json(uniqueAlbums);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
