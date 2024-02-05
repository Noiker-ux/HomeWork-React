import { IPropsRatingLine } from './IPropsRatingLine.props';
import  styles  from './RatingLine.module.css'
import classNames from 'classnames';

const RatingLine = ({ percent, title, count }: IPropsRatingLine) => {
    return <div className={classNames(styles['rating-item'], styles[`${title}`])} style={{width:`${percent}%`}}></div>
}

export default RatingLine;