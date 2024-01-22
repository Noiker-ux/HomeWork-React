import style from './Favourites.module.css';


const Favourites =  ({ onClick }) => {
	return (
		<div className="favorites">
			<button className={style['favoritesBtn']} onClick={onClick}>Мои фильмы</button>
			<span className={style['counter']}>2</span>
		</div>
	);
};

export default Favourites;
