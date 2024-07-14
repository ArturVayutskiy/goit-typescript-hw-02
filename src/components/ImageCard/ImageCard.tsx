import css from "./ImageCard.module.css";
import { FC } from "react";
import { ImageCardProps } from "./ImageCard.types";

const ImageCard: FC<ImageCardProps> = ({ photo, onClick }) => {
  const { urls, alt_description } = photo;
  const { small, regular } = urls;

  return (
    <li className={css.card}>
      <div className={css.imageWrapper}>
        <img
          src={small}
          alt={alt_description}
          className={css.image}
          onClick={() =>
            onClick({ big: regular, description: alt_description })
          }
        />
      </div>
    </li>
  );
};

export default ImageCard;
