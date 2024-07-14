import css from "./LoadMoreBtn.module.css";
import { FC } from "react";
import { LoadMoreBtnProps } from "./LoadMoreBtn.types";

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button className={css.LoadMoreBtn} type="button" onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
