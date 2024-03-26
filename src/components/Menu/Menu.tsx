
import style from './Menu.module.css';
import AuthtorizationItem from './MenuItems/AuthtorizationItem';
import Favorite from './MenuItems/Favorite';
import Profile from './MenuItems/Profile';
import SearchGames from './MenuItems/Search';

function Menu() {
	return (
		<nav className={style['menu']}>
			<ul className={style['menu-list']}>
				<SearchGames />
				<Favorite />
				<Profile />
				<AuthtorizationItem />
			</ul>
		</nav>
	);
}

export default Menu;
