
import style from './Menu.module.css';

function Menu({ profiles, onLog }) {

	const exit = (e) => {
		e.preventDefault();
		let dataFromLocalStorage = JSON.parse(localStorage.getItem('profiles'));
		const idProfile = dataFromLocalStorage.findIndex(profile=>profile.name===profiles.name);
		console.log(idProfile);
		dataFromLocalStorage[idProfile].isLogined=false;
		localStorage.setItem('profiles', JSON.stringify(dataFromLocalStorage));
		onLog({'name': null, isLogined:false});
	};

	return (
		<nav className={style['menu']}>
			<ul className={style['menu-list']}>
				<li className={style['menu-item']}><a href="#" className={style['menu-link']}>Поиск фильмов</a></li>
				<li className={style['menu-item']}><a href="#" className={style['menu-link']}>Мои фильмы<span className={style['counter']}>2</span></a></li>
				<li className={style['menu-item']}><a href="#" className={style['menu-link']}>{profiles.name}{profiles.isLogined && <img src="./public/UserRounded.svg" />}</a></li>
				<li className={style['menu-item']}><a onClick={exit} href="#" className={style['menu-link']}>{profiles.isLogined?'Выйти':'Войти'} <img src="./Login.svg" alt="Войти" /></a></li>
			</ul>
		</nav>
	);
}

export default Menu;
