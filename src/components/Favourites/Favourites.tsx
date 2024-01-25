import { ButtonHTMLAttributes } from 'react';
import style from './Favourites.module.css';

interface iPropsFavorites extends ButtonHTMLAttributes<HTMLButtonElement> {
	count_favorites: number;
}

const Favourites =  ({ count_favorites, ...props }:iPropsFavorites) => {
	return (
		<div className="favorites">
			<button className={style['favoritesBtn']} {...props}>Мои фильмы</button>
			<span className={style['counter']}>{count_favorites}</span>
		</div>
	);
};

export default Favourites;
