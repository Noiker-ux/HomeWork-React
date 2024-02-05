
import { useState } from "react";
import style from "./DetailPage.module.css";
import { Link, useLoaderData } from "react-router-dom";
import Handling from "../../components/Handling/Handling";
import { IGame } from "../../assets/IGame";

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
    platforms,
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


  return (
    <div className={style["detail"]}>
      <div className={style["top"]}>
        <Link to="../">Поиск игр</Link>
        <Handling text={name} />
      </div>
      <div className={style["body"]}>
        <div className={style["bodyTop"]}>
          <img className={style["image"]} src={background_image} alt="Poster" />
          <div className={style["right-panel"]}>
            <div className={style["right-panel-top"]}>
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
            </div>
            <div className={style["right-panle-body"]}>
              <div className={style["infoblock"]}>
                <span className={style["infoblock-title"]}>Genre</span>
                <span className={style["infoblock-text"]}>
                  {handleBlockGenre()}
                </span>
              </div>

              <div className={style["infoblock"]}>
                <span className={style["infoblock-title"]}>Platforms</span>
                <span className={style["infoblock-text"]}>
                  {}
                </span>
              </div>

            </div>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: description as string }}></div>
      </div>
    </div>
  );
}
