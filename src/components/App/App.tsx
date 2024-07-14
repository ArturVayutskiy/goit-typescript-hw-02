import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import fetchPhotos from "../../unsplash-api";
import ImageModal from "../ImageModal/ImageModal";
import css from "./App.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { Oval } from "react-loader-spinner";
import { Photo, ImageData, FetchPhotosResponse } from "./App.types";

const App: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [description, setDescription] = useState<string>("");
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data: FetchPhotosResponse = await fetchPhotos(query, page);
        if (data.total_pages === 0) {
          setError("Nothing was found. Please try another word.");
        } else {
          setPhotos((prevPhotos) => [...prevPhotos, ...data.results]);
          setTotalPages(data.total_pages);
        }
      } catch (error) {
        setError("Something went wrong. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
    setPhotos([]);
    setTotalPages(0);
  };

  const handleMore = () => {
    setPage(page + 1);
  };

  const handleModalOpen = ({ big, description }: ImageData) => {
    setSelectedImg(big);
    setDescription(description);
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setSelectedImg(null);
    setDescription("");
    setModalIsOpen(false);
  };

  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />
      {error && (
        <ErrorMessage message={error} className={css.error}>
          {error}
        </ErrorMessage>
      )}
      {photos.length > 0 && (
        <ImageGallery photos={photos} onImageClick={handleModalOpen} />
      )}
      {isLoading && <Oval />}
      {photos.length > 0 && page < totalPages && !isLoading && (
        <LoadMoreBtn onClick={handleMore}>Load more</LoadMoreBtn>
      )}
      {modalIsOpen && (
        <ImageModal
          bigUrl={selectedImg}
          isOpen={modalIsOpen}
          description={description}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default App;
