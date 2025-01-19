import React from "react";
import { AlbumProps } from "../interfaces/AlbumInterfaces";
import "./AlbumComponent.css";

const AlbumComponent: React.FC<AlbumProps> = ({ albumName, thumbnail }) => {
  return (
    <div className="album-container">
      <img src={thumbnail} alt={albumName} className="album-image" />
      <h3 className="album-title">{albumName}</h3>
    </div>
  );
};

export default AlbumComponent;
