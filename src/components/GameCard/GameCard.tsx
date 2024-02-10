import style from "./GameCard.module.css";
import { IGame } from "../../assets/IGame";
import { Link } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import { MouseEvent, useState } from "react";
import GameCardPoster from "../GameCardPoster/GameCardPoster";
import { useDispatch, useSelector } from "react-redux";
import { ActionStore, RootState } from "../../store/store";
import { gameAction } from "../../store/games.slice";

function GameCard({ props }: { props: IGame }) {
  const {
    id,
    background_image,
    name,
    short_screenshots,
    released,
    parent_platforms,
    metacritic
  } = props;

  const dispatch = useDispatch<ActionStore>(); 
  const [hovSlider, setHovSlider] = useState<boolean>(false);
  const games = useSelector((s:RootState) => s.games.games);

  const handleShowSlider = () => {
    setHovSlider(true);
  };

  const handleCloseSlider = () => {
    setHovSlider(false);
  };

  const add = (e: MouseEvent) => {
    e.preventDefault();
    const profiles = localStorage.getItem('profiles');
    let arrProfile = JSON.parse(profiles as string);
    const idxProfile = arrProfile.findIndex((e:any) => {return e.isLogined==true})
    const idxGameInFavorite = arrProfile[idxProfile].myGames.findIndex((e:IGame) => {return  e.id == id})
      if (idxGameInFavorite==-1){
        arrProfile[idxProfile].myGames.push(props);
        localStorage.setItem('profiles', JSON.stringify(arrProfile))
        dispatch(gameAction.add({
          ...props
        }));
      } else {
        arrProfile[idxProfile].myGames.splice(idxGameInFavorite,1);
        localStorage.setItem('profiles', JSON.stringify(arrProfile))
        dispatch(gameAction.remove(id));
      }
    
  }

  return (
    <Link
      to={`/movie/${id}`}
      className={style["game-card"]}
      onMouseOver={handleShowSlider}
      onMouseOut={handleCloseSlider}
    >
      <div className={style["game-card-wrap"]}>
        {short_screenshots && background_image &&
        <GameCardPoster 
          background_image={background_image} 
          short_screenshots={short_screenshots} 
          hovSlider={hovSlider} 
         /
        >}
        <div className={style["info"]}>
          <div className={style["top"]}>
            <span>{released?.slice(0, 4)}</span>
            <div className={style["platforms"]}>
              {parent_platforms
                ? parent_platforms.map((e) => (
                    <img
                      key={e.platform.id}
                      className={style["platformIco"]}
                      src={`/public/platformsIcons/${e.platform.slug}.svg`}
                      alt={e.platform.slug}
                    />
                  ))
                : ""}
            </div>
            <div className={style["rating-wrapper"]}>
              <img src="./public/Star.svg" alt="Star" />
              <span>{metacritic}</span>
            </div>
          </div>
          <p className={style["name"]}>{name}</p>
          <div className={style["like-wrapper"]}>
            {games.find((e:IGame)=> {return e.id == id})?<img src="./public/Bookmark.svg" alt="Bookmark"/>:<img src="./public/like.svg" alt="Like"/>}
            <a href="#" onClick={add}>{games.find((e:IGame)=> {return e.id == id})?<span className={style['myGame']}>В избранном</span>:<span>В избранное</span>}</a>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default GameCard;
