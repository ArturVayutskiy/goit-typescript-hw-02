import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { FC } from "react";
import { SearchBarProps } from "./SearchBar.types";

const notify = () => toast.error("Please enter the text in the search field!");

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const request = (
      evt.currentTarget.elements.namedItem("topic") as HTMLInputElement
    ).value.trim();
    if (request === "") {
      notify();
      return;
    }
    onSearch(request);
    evt.currentTarget.reset();
  };

  return (
    <header className={css.searchBar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button type="submit" className={css.button}>
          Search
        </button>
        <input
          type="text"
          name="topic"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.input}
        />
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;
