
import { useState } from "react";
import style from "./DetailPage.module.css";
import { Link, useLoaderData } from "react-router-dom";
import Handling from "../../components/Handling/Handling";
import { IDevelopers, IGame, IGenres, IPlatforms, IPublishers, IRatings } from "../../assets/IGame";
import { IPropsRatingLine } from "../../components/RatingLine/IPropsRatingLine.props";
import RatingLine from "../../components/RatingLine/RatingLine";
import RatingBlock from "../../components/RatingBlock/RatingBlock";
import StoresBlock from "../../components/StoresBlock/StoresBlock";

export default function DetailPage() {
  const data = useLoaderData();
  const [detail, setDetail] = useState(data as IGame);
  const {
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
    developers
  } = detail;



  
  const handleConvertRelease = (date: string) => {
    let dateFromString = new Date(date);
    let formatter = new Intl.DateTimeFormat("en", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    return formatter.format(dateFromString);
  };



  const handleBlockGenre = () => {
    let genresArr: string[] = [];
    if (genres){
       genres.map((e) => genresArr.push(e.name));
    }
    return genresArr.join(', ')
  };

  const handleJoiner = (key:any) => {
    let resArr: string[] = [];
    switch (key) {
      case genres:
        key.map((e:IGenres) => resArr.push(e.name));
        break;
      case platforms:
        key.map((e:IPlatforms) => resArr.push(e.platform.name))
        break;
      case publishers:
        key.map((e:IPublishers) => resArr.push(e.name))
        break;
      case developers:
        key.map((e:IDevelopers) => resArr.push(e.name))
        break;
      default:
        break;
    }
    return resArr.join(', ')
  }

  console.log(data);
  

  return (
    <div className={style["detail"]}>
      <div className={style["body"]}>
        <div className={style["bodyTop"]}>
          <div>
            <img className={style["image"]} src={background_image} alt="Poster" />
            <span className={style["infoblock-title"]}>Description</span>
            <div dangerouslySetInnerHTML={{ __html: description as string }}></div>
          </div>
          <div className={style["right-panel"]}>
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
            <Handling text={name} />

            {ratings && <RatingBlock ratings={ratings}/>}
            {stores &&  <StoresBlock stores={stores} />}


            <div className={style["infoblocks"]}>
              <div className={style["infoblock"]}>
                <span className={style["infoblock-title"]}>Genre</span>
                <span className={style["infoblock-text"]}>
                  {handleJoiner(genres)}
                </span>
              </div>

              <div className={style["infoblock"]}>
                <span className={style["infoblock-title"]}>Platforms</span>
                <span className={style["infoblock-text"]}>
                  {handleJoiner(platforms)}
                </span>
              </div>


              <div className={style["infoblock"]}>
                <span className={style["infoblock-title"]}>Release date</span>
                <span className={style["infoblock-text"]}>
                  {released && handleConvertRelease(released)}
                </span>
              </div>


              <div className={style["infoblock"]}>
                <span className={style["infoblock-title"]}>Publisher</span>
                <span className={style["infoblock-text"]}>
                  {handleJoiner(publishers)}
                </span>
              </div>

              <div className={style["infoblock"]}>
                <span className={style["infoblock-title"]}>Age rating</span>
                <span className={style["infoblock-text"]}>
                  {esrb_rating && esrb_rating.name}
                </span>
              </div>

              <div className={style["infoblock"]}>
                <span className={style["infoblock-title"]}>Playtime</span>
                <span className={style["infoblock-text"]}>
                  {playtime} hours
                </span>
              </div>

              <div className={style["infoblock"]}>
                <span className={style["infoblock-title"]}>Developers</span>
                <span className={style["infoblock-text"]}>
                  {handleJoiner(developers)}
                </span>
              </div>

            </div>
            </div>
          </div>
        </div>
        
      </div>
     
    </div>
  );
}
