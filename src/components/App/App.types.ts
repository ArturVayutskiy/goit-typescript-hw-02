export interface Photo {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

export interface ImageData {
  big: string;
  description: string;
}

export interface FetchPhotosResponse {
  total_pages: number;
  results: Photo[];
}
