import style from "./GameCard.module.css";
import { IGame } from "../../assets/IGame";
import { Link } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import { useState } from "react";
import GameCardPoster from "../GameCardPoster/GameCardPoster";
import { handleConvertRating } from "../../helpers/ConvertRating";
import FavoriteButton from './FavoriteButton/FavoriteButton';

function GameCard({ props }: { props: IGame }) {
  const {
    id,
    background_image,
    name,
    short_screenshots,
    released,
    parent_platforms,
    metacritic,
    rating
  } = props;

  const [hovSlider, setHovSlider] = useState<boolean>(false);

  const handleShowSlider = () => {
    setHovSlider(true);
  };

  const handleCloseSlider = () => {
    setHovSlider(false);
  };

  
  return (
    <Link
      to={`/games/${id}`}
      className={style["game-card"]}
      onMouseOver={handleShowSlider}
      onMouseOut={handleCloseSlider}
    >
      <div className={style["game-card-wrap"]}>
        {short_screenshots && background_image &&
        <GameCardPoster 
          background_image={background_image} 
          short_screenshots={short_screenshots} 
          hovSlider={hovSlider}/
        >}
        <div className={style["info"]}>
          <div className={style["top"]}>
            <span>{released?.slice(0, 4)}</span>
            <div className={style["platforms"]}>
              {parent_platforms && parent_platforms.map((e) => (
                    <img
                      key={e.platform.id}
                      className={style["platformIco"]}
                      src={`/public/platformsIcons/${e.platform.slug}.svg`}
                      alt={e.platform.slug}
                    />
                  ))
                }
            </div>
            <div className={style["rating-wrapper"]}>
              <img src="./public/Star.svg" alt="Star" />
              <span>{metacritic ? metacritic : handleConvertRating(rating as number)}</span>
            </div>
          </div>
          <p className={style["name"]}>{name}</p>
          <FavoriteButton idGame={id}/>
        </div>
      </div>
    </Link>
  );
}

export default GameCard;
