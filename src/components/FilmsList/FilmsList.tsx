import style from "./FilmsList.module.css";
import FilmCard from "../FilmCard/FilmCard";
import Handling from "../Handling/Handling";
import Paragraph from "../Paragraph/Paragraph";

import { IFilm } from "../../assets/InitData";

function FilmsList({ data }: { data: any }) {
  if (!data.length) {
    return (
      <div className={style["no-films"]}>
        <Handling text="Упс... Ничего не найдено :(" />
        <Paragraph
          text="Попробуйте изменить запрос или ввести более точное название фильма"
          className="paragraph-medium"
        />
      </div>
    );
  }

  return (
    <div className={style["film-list"]}>
      {data.map((film: IFilm) => (
        <FilmCard props={film} key={film.id} />
      ))}
    </div>
  );
}

export default FilmsList;
