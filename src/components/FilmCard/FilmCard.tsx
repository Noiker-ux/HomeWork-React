import style from "./FilmCard.module.css";
import { IFilm } from "../../assets/InitData";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useState } from "react";

function FilmCard({ props }: { props: IFilm }) {
  const {
    id,
    background_image,
    name,
    rating,
    short_screenshots,
    released,
    parent_platforms,
  } = props;

  // state Hoverr
  const [hovSlider, setHovSlider] = useState<boolean>(false);
  // state array images for slider
  const [slider, setSlider] = useState<any>([]);

  let images: any = [];

  //  function for show slider
  const handleShowSlider = () => {
    short_screenshots?.map((e) => {
      const item = {
        original: e.image,
        thumbnail: e.image,
        thumbnailHeight: 49,
        originalHeight: 200,
      };

      images.push(item);
    });
    setHovSlider(true);
    setSlider(images);
  };

  // functiom for close Slider
  const handleCloseSlider = () => {
    setHovSlider(false);
    setSlider([]);
  };

  return (
    <Link
      to={`/movie/${id}`}
      className={style["film-card"]}
      onMouseOver={handleShowSlider}
      onMouseOut={handleCloseSlider}
    >
      <div className={style["film-card-wrap"]}>
        <div className={style["poster"]}>
          {!hovSlider && (
            <img
              src={background_image}
              alt="poster"
              className={style["poster-img"]}
            />
          )}

          {slider && hovSlider && (
            <ImageGallery
              items={slider}
              showPlayButton={false}
              slideInterval={2500}
              slideOnThumbnailOver={true}
              showIndex={false}
              autoPlay={true}
              showNav={false}
              showFullscreenButton={false}
            />
          )}
        </div>

        <div className={style["info"]}>
          <div className={style["top"]}>
            <span>{released?.slice(0, 4)}</span>
            <div className={style["platforms"]}>
              {parent_platforms
                ? parent_platforms.map((e) => (
                    <img
                      className={style["platformIco"]}
                      src={`/public/platformsIcons/${e.platform.slug}.svg`}
                      alt={e.platform.slug}
                    />
                  ))
                : ""}
            </div>
            <div className={style["rating-wrapper"]}>
              <img src="./public/Star.svg" alt="Star" />
              <span>{rating}</span>
            </div>
          </div>
          <p className={style["name"]}>{name}</p>
          <div className={style["like-wrapper"]}>
            <img src="./public/like.svg" alt="Like" />
            <a href="#">В избранное</a>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default FilmCard;
