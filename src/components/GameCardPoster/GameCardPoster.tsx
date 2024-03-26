import { IShort_screenshots } from "../../assets/IGame";
import style from './GameCardPoster.module.css'
import ImageGallery from "react-image-gallery";

interface IPoster {
    background_image: string;
    short_screenshots?: IShort_screenshots[];
    hovSlider: boolean;
}

interface IScreenShotsImages {
    original: string,
    thumbnail: string,
    thumbnailHeight: number,
    originalHeight: number
}

const GameCardPoster = ({ background_image, short_screenshots, hovSlider }:IPoster) => {
    let images: IScreenShotsImages[] = [];
    
    short_screenshots?.map((e:IShort_screenshots) => {
        const item = {
          original: e.image,
          thumbnail: e.image,
          thumbnailHeight: 49,
          originalHeight: 200,
        };
        images.push(item);
      });

          

    return (<div className={style["poster"]}>
          {!hovSlider && background_image && (
            <img
              src={background_image}
              alt="poster"
              className={style["poster-img"]}
            />
          )}

          {!hovSlider && !background_image && (
            <img
              src="./public/noImage.jpg"
              alt="poster"
              className={style["poster-img"]}
            />
          )}

          {hovSlider && background_image && (
            <ImageGallery
              items={images}
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
    )
}

export default GameCardPoster;