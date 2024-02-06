import { IPublishers, IDevelopers, IPlatforms, IGenres, ITags, IEsrb_rating } from '../../assets/IGame';
import style from './Infoblock.module.css'

const Infoblock = ({ data, title }: {
  data: IPublishers[] | IDevelopers[] | IPlatforms[] | IGenres[] | ITags[] | IEsrb_rating | string | number,
  title:string
}) => {

function instanceofIPlatforms (data: any): data is IPlatforms{
  return "platform" in data;
}



const handleJoiner = (data: any) => {
    let resArr: string[] = [];
    if (typeof data === 'string' || typeof data === 'number'){
      return String(data);
    }
    if (instanceofIPlatforms(data[0])){
      data.map((el:any) => resArr.push(el.platform.name))
    } else{
      data.map((el:any) => resArr.push(el.name))
    }
    return resArr.join(', ')
  }

  return  <div className={style["infoblock"]}>
    <span className={style["infoblock-title"]}>{title}</span>
    <span className={style["infoblock-text"]} >
      {data && handleJoiner(data)}
    </span>
  </div>
}
export default Infoblock;