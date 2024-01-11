
import './Menu.css';

function Menu() {
	return (
		<nav className="menu">
			<ul className="menu-list">
				<li className="menu-item"><a href="" className="menu-link">Поиск фильмов</a></li>
				<li className="menu-item"><a href="" className="menu-link">Мои фильмы<span className='counter'>2</span></a></li>
				<li className="menu-item"><a href="" className="menu-link">Войти <img src="./Login.svg" alt="Войти" /></a></li>
			</ul>
		</nav>
	);
}

export default Menu;
