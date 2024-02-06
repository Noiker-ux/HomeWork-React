import { IRatings } from '../../assets/IGame';
import RatingLine from '../RatingLine/RatingLine';
import style from './RatingBlock.module.css';
import classNames from 'classnames';

const RatingBlock = ({ ratings }:{ ratings: IRatings[]}) => {
    return (
    <div className={style['rating']}>
        <div className={style['ratingline']}>
            {ratings && ratings.map((e:IRatings) => <RatingLine key={e.id} percent={e.percent} count={e.count} title={e.title} />)}
        </div>
        <div className={style['rating-desc']}>
            {ratings && ratings.map((e:IRatings) => <div 
            key={e.id} 
            className={style['point-wrapper']}
            >
                <span className={classNames(style[`point`], style[`${e.title}`])}></span>
                <span className={style['title']}>{e.title}</span>
                <span className={style['count']}>{e.count}</span>
            </div>)}
        </div>
    </div>
);}

export default RatingBlock;