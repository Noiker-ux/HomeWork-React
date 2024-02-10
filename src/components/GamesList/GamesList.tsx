import style from "./GamesList.module.css";
import GameCard from "../GameCard/GameCard";
import Handling from "../Handling/Handling";
import Paragraph from "../Paragraph/Paragraph";
import { IGame } from "../../assets/IGame";

function GamesList({ data }: { data: any }) {
  if (!data.length) {
    return (
      <div className={style["no-games"]}>
        <Handling text="Упс... Ничего не найдено :(" />
        <Paragraph
          text="Попробуйте изменить запрос или ввести более точное название фильма"
          className="paragraph-medium"
        />
      </div>
    );
  }


  return (
    <div className={style["game-list"]}>
      {data.map((game: IGame) => (
        <GameCard props={game} key={game.id} />
      ))}
    </div>
  );
}

export default GamesList;
