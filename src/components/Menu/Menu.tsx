
import style from './Menu.module.css';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Exit from './Exit';
import Favorite from './Favorite';

function Menu() {
	const { name, isLogined} = useSelector((s:RootState) => s.profile)

	return (
		<nav className={style['menu']}>
			<ul className={style['menu-list']}>
				<li className={style['menu-item']}>
					<NavLink to={'/'} className={({ isActive }) => classNames(style['menu-link'], {
						[style.active]:isActive
					})}>
						Поиск игр
					</NavLink>
				</li>
				
				<Favorite />

				<li className={style['menu-item']}>
					<NavLink to={'/profile'} className={({ isActive }) => classNames(style['menu-link'], {
						[style.active]:isActive
					})}>
						{name}{isLogined && <img src="./public/UserRounded.svg" />}
					</NavLink>
				</li>
				
				<Exit />
			</ul>
		</nav>
	);
}

export default Menu;
