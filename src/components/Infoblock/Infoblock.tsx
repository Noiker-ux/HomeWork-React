import { IPlatforms } from '../../assets/IGame';
import style from './Infoblock.module.css'
import { IInfoblockProps } from './Infoblock.props';


const Infoblock = ({ data, title }: IInfoblockProps) => {

function instanceofIPlatforms (data: any): data is IPlatforms{
  return "platform" in data;
}


const handleJoiner = (data: any) => {
  if(data){
    let resArr: string[] = [];

    if (typeof data === 'string' || typeof data === 'number'){
      return String(data);
    }

    if (data.length){
      if (instanceofIPlatforms(data[0])){
        data.map((el:IPlatforms) => resArr.push(el.platform.name))
      } else{
        data.map((el:any) => resArr.push(el.name))
      }
      return resArr.join(', ')
    }
  }
}

  return  <div className={style["infoblock"]}>
    <span className={style["infoblock-title"]}>{title}</span>
    <span className={style["infoblock-text"]} >
      {data && handleJoiner(data)}
    </span>
  </div>
}
export default Infoblock;