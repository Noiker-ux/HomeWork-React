
import style from './Menu.module.css';

function Menu() {
	return (
		<nav className={style['menu']}>
			<ul className={style['menu-list']}>
				<li className={style['menu-item']}><a href="#" className={style['menu-link']}>Поиск фильмов</a></li>
				<li className={style['menu-item']}><a href="#" className={style['menu-link']}>Мои фильмы<span className={style['counter']}>2</span></a></li>
				<li className={style['menu-item']}><a href="#" className={style['menu-link']}>Войти <img src="./Login.svg" alt="Войти" /></a></li>
			</ul>
		</nav>
	);
}

export default Menu;
