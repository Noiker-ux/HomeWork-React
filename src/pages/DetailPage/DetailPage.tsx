
import { useState } from "react";
import style from "./DetailPage.module.css";
import { useLoaderData } from "react-router-dom";
import Handling from "../../components/Handling/Handling";
import { IDevelopers, IGame, IGenres, IPlatforms, IPublishers, ITags } from "../../assets/IGame";
import RatingBlock from "../../components/RatingBlock/RatingBlock";
import StoresBlock from "../../components/StoresBlock/StoresBlock";
import classNames from "classnames";
import axios from "axios";
import Infoblock from "../../components/Infoblock/Infoblock";
import { handleConvertRelease } from '../../helpers/ConvertData'


export default function DetailPage() {
  const data = useLoaderData();
  const [detail, setDetail] = useState(data as IGame);
  const {
    id,
    name,
    background_image,
    released,
    parent_platforms,
    description,
    genres,
    rating,
    platforms,
    publishers,
    esrb_rating,
    stores,
    playtime,
    ratings,
    tags,
    developers
  } = detail;

  return (
    <div className={style["detail"]}>
      {/* left */}
          <div className={classNames(style['left-panel'], style['panel'])}>
            <img className={style["image"]} src={background_image} alt="Poster" />

            <div className={style["infoblock"]}>
                <span className={style["infoblock-title"]}>Description</span>
                <div dangerouslySetInnerHTML={{ __html: description as string }}></div>
            </div>
          </div>

      {/* right */}
          <div className={classNames(style["right-panel"], style['panel'])}>
            <div className={style["right-panel-top"]}>
              <div className={style["right-panel-top-left"]}>
              {released && 
              <span className={style["date"]}>
                {handleConvertRelease(released)}
              </span>}
              <div className={style["platforms"]}>
                {parent_platforms &&
                  parent_platforms.map((e) => (
                    <img
                      className={style["platformIcon"]}
                      src={`../public/platformsIcons/${e.platform.slug}.svg`}
                      alt={e.platform.slug}
                    />
                  ))}
              </div>
              <span className={style['playtime']}>AVERAGE PLAYTIME: {playtime} HOURS</span>
              </div>
              <span className={style['rating']}><img src="/public/star.svg" alt='star'/>{rating}</span>
            </div>
            <div className={style["right-panel-body"]}>
            <Handling text={name} className="small"/>
            {ratings && <RatingBlock ratings={ratings}/>}
            {stores &&  <StoresBlock stores={stores} id={id} />}
            <div className={style['infoblocks']}>
              {genres && <Infoblock data={genres} title={'Genres'} />}
              {platforms && <Infoblock data={platforms} title={'Platforms'} />}
              {released && <Infoblock data={released} title={'Release date'} />}
              {publishers && <Infoblock data={publishers} title={'Publisher'} />}
              {esrb_rating && <Infoblock data={esrb_rating.name} title={'Age rating'} />}
              {playtime && <Infoblock data={playtime} title={'Playtime'} />}
              {developers && <Infoblock data={developers} title={'Developers'} />}
              {tags && <Infoblock data={tags} title={'Tags'} />}
            </div>
          </div>
        </div>
      </div>

     

  );
}
