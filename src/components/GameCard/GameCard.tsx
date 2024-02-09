import style from "./GameCard.module.css";
import { IGame } from "../../assets/IGame";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
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
  const games = useSelector((s:RootState) => s.games.games)

  const [hovSlider, setHovSlider] = useState<boolean>(false);

  
  const handleShowSlider = () => {
    setHovSlider(true);
  };

  const handleCloseSlider = () => {
    setHovSlider(false);
  };

  const add = (e: MouseEvent) => {
    e.preventDefault();
    const profiles = localStorage.getItem('profiles');
    if (profiles){

      let arrProfile = JSON.parse(profiles);
      const idx = arrProfile.findIndex((e:any) => {return e.isLogined==true})
      const have = arrProfile[idx].myGames.findIndex((e:number) => {return  e == id})
      if (have==-1){
        arrProfile[idx].myGames.push(id);
        localStorage.setItem('profiles', JSON.stringify(arrProfile))
        dispatch(gameAction.add(id));
      } else {
        arrProfile[idx].myGames.splice(have,1);
        localStorage.setItem('profiles', JSON.stringify(arrProfile))
        dispatch(gameAction.remove(id));
      }
    }
    return;
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
            <img src="./public/like.svg" alt="Like" />
            <a href="#" onClick={add}>{'sas'}</a>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default GameCard;
