
import style from './Menu.module.css';
import {  IContextValue } from '../../context/userContext.types';
import { UserContext } from '../../context/user.context';
import Favourites from '../Favourites/Favourites';
import { MouseEvent, useContext } from 'react';
import { IUser } from '../../context/userContext.types'

function Menu() {
	const { profile, saveDataProfile } = useContext<IContextValue>(UserContext);

	const exit = (e:MouseEvent) => {
		e.preventDefault();
		let dataFromLocalStorage = JSON.parse(localStorage.getItem('profiles') || '[]');
		const idProfile = dataFromLocalStorage.findIndex((profile:IUser) => profile.name===profile.name);
		dataFromLocalStorage[idProfile].isLogined=false;
		localStorage.setItem('profiles', JSON.stringify(dataFromLocalStorage));
		saveDataProfile({'name': null, isLogined:false});
	};

	return (
		<nav className={style['menu']}>
			<ul className={style['menu-list']}>
				<li className={style['menu-item']}>
					<a href="#" className={style['menu-link']}>
						Поиск фильмов
					</a>
				</li>
				<li className={style['menu-item']}>
					<Favourites count_favorites={2}/>
				</li>
				<li className={style['menu-item']}>
					<a href="#" className={style['menu-link']}>
						{profile.name}{profile.isLogined && <img src="./public/UserRounded.svg" />}
					</a>
				</li>
				<li className={style['menu-item']}>
					<a onClick={exit} href="#" className={style['menu-link']}>{profile.isLogined?'Выйти':'Войти'} 
						<img src="./Login.svg" alt="Войти" />
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Menu;
