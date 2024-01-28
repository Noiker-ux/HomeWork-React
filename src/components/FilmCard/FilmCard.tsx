
import style from './FilmCard.module.css';
import { IFilm } from '../../assets/InitData'
import { Link } from 'react-router-dom';

function FilmCard({ props }:{props: IFilm}) {
	const {id, poster, stars, name} = props;
	return (
		<Link to={`/movie/${id}`}>
			<div className={style['film-card']}>
				<div className={style['poster']}>
					<img src={poster} alt="poster" className={style['poster-img']} />
					<p className={style['star']}>
						<img src="./public/star.svg" alt="star" className={style['star-icon']}/>
						<span className={style['star-text']}>{String(stars)}</span>
					</p>
				</div>
				<div className={style['info']}>
					<p className={style['name']}>{name}</p>
					<div className={style['like-wrapper']}>
						<img src="./public/like.svg" alt="Like" />
						<a href="#">В избранное</a>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default FilmCard;
