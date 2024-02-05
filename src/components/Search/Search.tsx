import style from "./Search.module.css";
import Handling from "../Handling/Handling";
import Paragraph from "../Paragraph/Paragraph";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useRef } from "react";

function Search({ setFilms }: any) {
  const refInput = useRef<HTMLInputElement | null>(null);
  const refButton = useRef<HTMLButtonElement | null>(null);

  const querySearch = () => {
    if (refInput.current) {
      const valueInput = refInput.current.value;
      setFilms(valueInput);
    }
  };

  return (
    <div className={style["search-block"]}>
      <Handling text="Поиск" />
      <Paragraph
        className="paragraph-small"
        text="Введите название игры или дополнения для поиска и добавления в избранное."
      ></Paragraph>
      <div className={style["search"]}>
        <Input
          placeholder="Введите название"
          icon="./search.svg"
          ref={refInput}
        />
        <Button text="Искать" onClick={querySearch} ref={refButton} />
      </div>
    </div>
  );
}

export default Search;
