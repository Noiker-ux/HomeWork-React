import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import style from '../Menu.module.css';

export default function SearchGames() {
	
	return (
	<li className={style['menu-item']}>
		<NavLink to={'/'} className={({ isActive }) => classNames(style['menu-link'], {
			[style.active]:isActive
		})}> 
			Поиск игр
		</NavLink>
	</li>
	);
}