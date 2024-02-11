import style from "./Search.module.css";
import Handling from "../Handling/Handling";
import Paragraph from "../Paragraph/Paragraph";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { MouseEvent, useRef, useState } from "react";

function Search({ loadGamesList, skipSearch }: any) {
  const refInput = useRef<HTMLInputElement | null>(null);
  const refButton = useRef<HTMLButtonElement | null>(null);
  const refButtonSearch = useRef<HTMLButtonElement | null>(null);


  const [search, setSearch] = useState<boolean>(false);

  const querySearch = async (e: MouseEvent) => {
    e.preventDefault();
    if (refInput.current) {
      const valueInput = refInput.current.value.trim();
      if (valueInput){
        setSearch(true)
        await loadGamesList(valueInput);
      }
    } 
  };

  const dropSearch = (e: MouseEvent) => {
    e.preventDefault();
    skipSearch();
    setSearch(false)
  }


  return (
    <form className={style["search-block"]}>
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
      {search && <Button text="Сбросить поиск" onClick={dropSearch} ref={refButtonSearch} />}
    </form>
  );
}

export default Search;
