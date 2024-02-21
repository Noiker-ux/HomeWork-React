import { useDispatch, useSelector } from 'react-redux';
import ILocalStorage from '../../../helpers/ILocalStorage';
import { gameAction } from '../../../store/games.slice';
import { ActionStore, RootState } from '../../../store/store';
import style from './FavoritButton.module.css';
import { MouseEvent } from 'react';

export default function FavoriteButton({idGame}:{idGame:number}) {
	const dispatch = useDispatch<ActionStore>(); 
	const games = useSelector((s:RootState) => s.games.games);

	const addOrRemoveFromFavorite = (e: MouseEvent) => {
		e.preventDefault();
		let arrProfile = JSON.parse(localStorage.getItem('profiles') as string);
		const idxProfile = arrProfile.findIndex((e:ILocalStorage) => e.isLogined)
		const idxGameInFavorite = arrProfile[idxProfile].myGames.findIndex((e:number) => e == idGame )
		if (idxGameInFavorite == -1){
			arrProfile[idxProfile].myGames.push(idGame);
			localStorage.setItem('profiles', JSON.stringify(arrProfile))
			dispatch(gameAction.add(idGame));
		} else {
			arrProfile[idxProfile].myGames.splice(idxGameInFavorite, 1);
			localStorage.setItem('profiles', JSON.stringify(arrProfile))
			dispatch(gameAction.remove(idGame));
		}
	}
  
	return (
		<a className={style['like-wrapper']} title='Кнопка избранного' href="#" onClick={addOrRemoveFromFavorite}>
			{games.find((e:number)=> e == idGame)?
			<>
				<img src="./public/Bookmark.svg" alt="Bookmark"/>
				<span className={style['myGame']}>В избранном</span>
			</>:
			<>
				<img src="./public/like.svg" alt="Like"/>
				<span>В избранноe</span>
			</>}
		</a>
	);
}