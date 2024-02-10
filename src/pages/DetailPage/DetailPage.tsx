
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
    tags,
    developers,
    metacritic
  } = detail;



  const infoblockArray = [
  {title:"Genres",data:genres},
  {title:"Released",data:released },
  {title:"Publishers",data:publishers },
  {title:"Platforms",data:platforms},
  {title:"Age rating",data:esrb_rating!.name},
  {title:"Playtime",data:playtime },
  {title:"Developers",data:developers},
  {title:"Tags",data:tags},
]
console.log(data);



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
              <span className={style['rating']}><img src="/public/star.svg" alt='star'/>{metacritic}</span>
            </div>
            <div className={style["right-panel-body"]}>
            <Handling text={name} className="small"/>
            {ratings && <RatingBlock ratings={ratings}/>}
            {stores &&  <StoresBlock stores={stores} id={id} name={name}/>}
           
            <div className={style['infoblocks']}>
              {infoblockArray.map(e =>  (
                <Infoblock data={e.data} title={e.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}
