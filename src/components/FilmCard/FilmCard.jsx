
import './FilmCard.css';

function FilmCard({ props }) {
	const {poster, stars, name} = props;
	return (
		<div className='film-card'>
			<div className="poster">
				<img src={poster} alt="poster" className='poster-img' />
				<p className='star'><img src="./public/star.svg" alt="star" className='star-icon'/><span className='star-text'>{stars}</span></p>
			</div>
			<div className="info">
				<p className='name'>{name}</p>
				<div className="like-wrapper">
					<img src="./public/like.svg" alt="Like" />
					<a href="#">В избранное</a>
				</div>
			</div>
		</div>
	);
}

export default FilmCard;
