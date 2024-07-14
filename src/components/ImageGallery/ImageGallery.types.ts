import { Photo } from "../App/App.types";

export interface ImageGalleryProps {
  photos: Photo[];
  onImageClick: (imageData: { big: string; description: string }) => void;
}
