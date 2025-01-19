import React, { useState } from "react";
import { AlbumType } from "../interfaces/AlbumInterfaces";
import { fetchAlbums, filterAlbumsBySearch } from "../services/albumService";
import AlbumComponent from "../components/AlbumComponent";
import Input from "../../../share/components/Input";
import Loader from "../../../share/components/Loader";
import "./albumsPage.css";
import { FormGroup } from "../components/FormGroup";

const AlbumsPage: React.FC = () => {
  const [albums, setAlbums] = useState<AlbumType[]>([]);
  const [search, setSearch] = useState("");
  const [artist, setArtist] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [filteredAlbums, setFilteredAlbums] = useState<AlbumType[]>([]);

  const handleSearch = async () => {
    if (!artist) {
      console.log("Please select an artist");
      return;
    }
    setLoading(true);
    try {
      const data: AlbumType[] = await fetchAlbums(artist);
      setAlbums(data);
      setFilteredAlbums(filterAlbumsBySearch(data, search));
    } catch (error) {
      console.error("Failed to load albums:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    const albumsSearched = filterAlbumsBySearch(albums, e.target.value);
    setFilteredAlbums(albumsSearched);
  };

  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">Search Albums by Artist</h1>

        <FormGroup
          label="Choose an Artist:"
          inputValue={artist}
          onInputChange={setArtist}
          buttonText="Search Albums"
          onButtonClick={handleSearch}
          isLoading={loading}
          placeholder={"Enter artist name..."}
        />

        {loading && <Loader />}

        <div className="search-input-container">
          <Input
            value={search}
            onChange={handleSearchChange}
            placeholder="Search albums..."
            className="mt-6"
          />
        </div>

        <div className="album-grid">
          {filteredAlbums &&
          Array.isArray(filteredAlbums) &&
          filteredAlbums.length > 0 ? (
            filteredAlbums.map((album) => (
              <AlbumComponent
                key={album.albumName}
                albumName={album.albumName}
                thumbnail={album.thumbnail}
              />
            ))
          ) : (
            <p>No albums found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlbumsPage;
