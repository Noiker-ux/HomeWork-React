import style from "./FilmCard.module.css";
import { IFilm } from "../../assets/InitData";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useState } from "react";

function FilmCard({ props }: { props: IFilm }) {
  const { id, background_image, name, rating, short_screenshots } = props;

  const [hovSlider, setHovSlider] = useState<boolean>(false);
  const [slider, setSlider] = useState<any>([]);

  let images: any = [];

  return (
    <Link
      to={`/movie/${id}`}
      className={style["film-card"]}
      onMouseOver={() => {
        short_screenshots?.map((e) => {
          const item = {
            original: e.image,
            thumbnail: e.image,
            thumbnailHeight: 50.7,
            originalHeight: 200,
          };

          images.push(item);
        });
        setHovSlider(true);
        setSlider(images);
        console.log(images);
      }}
      onMouseOut={() => {
        setHovSlider(false);
        setSlider([]);
      }}
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
              showIndex={true}
              autoPlay={true}
              showNav={false}
              showFullscreenButton={false}
            />
          )}

          <p className={style["star"]}>
            <img
              src="./public/star.svg"
              alt="star"
              className={style["star-icon"]}
            />
            <span className={style["star-text"]}>{String(rating)}</span>
          </p>
        </div>
        <div className={style["info"]}>
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
