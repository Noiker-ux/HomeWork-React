
import { useState } from "react";
import style from "./DetailPage.module.css";
import { useLoaderData } from "react-router-dom";
import Handling from "../../components/Handling/Handling";
import { IGame } from "../../assets/IGame";
import RatingBlock from "../../components/RatingBlock/RatingBlock";
import StoresBlock from "../../components/StoresBlock/StoresBlock";
import classNames from "classnames";
import Infoblock from "../../components/Infoblock/Infoblock";
import { handleConvertRelease } from '../../helpers/ConvertData'
import { handleConvertRating } from "../../helpers/ConvertRating";


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
    platforms,
    publishers,
    esrb_rating,
    stores,
    playtime,
    ratings,
    rating,
    developers,
    metacritic,
    tags
  } = detail;



  const infoblockArray = [
  genres?.length?{title:"Genres",data:genres}:'',
  released?{title:"Released",data:released }:'',
  publishers?.length?{title:"Publishers",data:publishers }:'',
  platforms?.length?{title:"Platforms",data:platforms}:'',
  esrb_rating?{title:"Age rating",data:esrb_rating.name}:'',
  playtime?{title:"Playtime",data:playtime }:'',
  developers?.length?{title:"Developers",data:developers}:'',
  tags?.length?{title:"Tags",data:tags}:''
]

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
              <span className={style['rating']}><img src="/public/star.svg" alt='star'/>
                {metacritic ? metacritic : handleConvertRating(rating as number)}
              </span>
            </div>
            <div className={style["right-panel-body"]}>
            <Handling text={name} className="small"/>
            {ratings && <RatingBlock ratings={ratings}/>}
            {stores &&  <StoresBlock stores={stores} id={id} name={name}/>}
           
            <div className={style['infoblocks']}>
              {infoblockArray
              .filter(e => e!=='')
              .map(e => (
                  <Infoblock data={e.data} title={e.title} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
  );
}
