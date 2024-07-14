import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { FC } from "react";
import { ImageGalleryProps } from "./ImageGallery.types";

const ImageGallery: FC<ImageGalleryProps> = ({ photos, onImageClick }) => {
  return (
    <ul className={css.gallery}>
      {photos.map((photo) => (
        <ImageCard key={photo.id} photo={photo} onClick={onImageClick} />
      ))}
    </ul>
  );
};

export default ImageGallery;
