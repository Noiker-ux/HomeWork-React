
import style from './Menu.module.css';
import { MouseEvent, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { ActionStore, RootState } from '../../store/store';
import { ISliceProfile, profileAction } from '../../store/profile.slice';
import { gameAction } from '../../store/games.slice';

function Menu() {
	let navigate = useNavigate();
	const { name, isLogined} = useSelector((s:RootState) => s.profile)
	const dispatch = useDispatch<ActionStore>();
	const favoriteGames = useSelector((s:RootState) => s.games.games)

	const exit = (e:MouseEvent) => {
		e.preventDefault();
		let dataFromLocalStorage = JSON.parse(localStorage.getItem('profiles') || '[]');
		const idProfile = dataFromLocalStorage.findIndex((elprofile:ISliceProfile) => elprofile.name===name);
		dataFromLocalStorage[idProfile].isLogined=false;
		localStorage.setItem('profiles', JSON.stringify(dataFromLocalStorage));
		dispatch(profileAction.logout())
		dispatch(gameAction.logout())
		navigate("/login");
	};


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
				
				
				{isLogined && <li className={style['menu-item']}>
					<NavLink to={'/favorites'} className={({ isActive }) => classNames(style['menu-link'], {
						[style.active]:isActive
					})}>
						Мои игры
						<span className={style['counter']}>{favoriteGames.length}</span>
					</NavLink>
				</li>}


				<li className={style['menu-item']}>
					<NavLink to={'/profile'} className={({ isActive }) => classNames(style['menu-link'], {
						[style.active]:isActive
					})}>
						{name}{isLogined && <img src="./public/UserRounded.svg" />}
					</NavLink>
				</li>
				{!isLogined?<>
					<li className={style['menu-item']}>
					<NavLink  to={'/login'} className={({ isActive }) => classNames(style['menu-link'],{
						[style.active]:isActive
					})}>
						Войти
						<img src="./Login.svg" alt="Войти" />
					</NavLink>
				</li>
				</>:<>
				<li onClick={exit} className={style['menu-item']}>
					<a className={style['menu-link']} onClick={exit} href='/'>Выйти</a>
					<img src="./Login.svg" alt="Войти" />
				</li>
				</>}
	
			</ul>
		</nav>
	);
}

export default Menu;
