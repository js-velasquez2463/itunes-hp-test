import { fetchData } from "../../../share/utils/fetchData";
import { AlbumType } from "../interfaces/AlbumInterfaces";
import { getValidToken } from "./loginService";

export const fetchAlbums = async (artist: string) => {
  try {
    const queryParams = { artist };
    const token = await getValidToken();
    const data = await fetchData("/albums", queryParams, token, "GET");
    return data;
  } catch (error) {
    console.error("No se pudieron cargar los álbumes:", error);
    throw error;
  }
};

export const filterAlbumsBySearch = (albums: AlbumType[], search: string) => {
  return albums.filter((album) =>
    album.albumName.toLowerCase().includes(search.toLowerCase())
  );
};
