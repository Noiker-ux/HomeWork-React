
import style from './Menu.module.css';
import { UserContext } from '../../context/user.context';
import Favourites from '../Favourites/Favourites';
import { useContext } from 'react';

function Menu() {
	const { profiles, saveDataProfiles } = useContext(UserContext);

	const exit = (e) => {
		e.preventDefault();
		let dataFromLocalStorage = JSON.parse(localStorage.getItem('profiles'));
		const idProfile = dataFromLocalStorage.findIndex(profile=>profile.name===profiles.name);
		dataFromLocalStorage[idProfile].isLogined=false;
		localStorage.setItem('profiles', JSON.stringify(dataFromLocalStorage));
		saveDataProfiles({'name': null, isLogined:false});
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
					<Favourites />
				</li>
				<li className={style['menu-item']}>
					<a href="#" className={style['menu-link']}>
						{profiles.name}{profiles.isLogined && <img src="./public/UserRounded.svg" />}
					</a>
				</li>
				<li className={style['menu-item']}>
					<a onClick={exit} href="#" className={style['menu-link']}>{profiles.isLogined?'Выйти':'Войти'} 
						<img src="./Login.svg" alt="Войти" />
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Menu;
