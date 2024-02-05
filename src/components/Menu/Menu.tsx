
import style from './Menu.module.css';
import {  IContextValue } from '../../context/userContext.types';
import { UserContext } from '../../context/user.context';
import { MouseEvent, useContext } from 'react';
import { IUser } from '../../context/userContext.types'
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { useNavigate } from "react-router-dom";

function Menu() {
	let navigate = useNavigate();
	const { profile, saveDataProfile } = useContext<IContextValue>(UserContext);

	const exit = (e:MouseEvent) => {
		e.preventDefault();
		let dataFromLocalStorage = JSON.parse(localStorage.getItem('profiles') || '[]');
		const idProfile = dataFromLocalStorage.findIndex((elprofile:IUser) => elprofile.name===profile.name);
		dataFromLocalStorage[idProfile].isLogined=false;
		localStorage.setItem('profiles', JSON.stringify(dataFromLocalStorage));
		saveDataProfile({'name': null, isLogined:false});
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
				<li className={style['menu-item']}>
					<NavLink to={'/favorites'} className={({ isActive }) => classNames(style['menu-link'], {
						[style.active]:isActive
					})}>
						Мои игры
						<span className={style['counter']}>2</span>
					</NavLink>
				</li>
				<li className={style['menu-item']}>
					<NavLink to={'/profile'} className={({ isActive }) => classNames(style['menu-link'], {
						[style.active]:isActive
					})}>
						{profile.name}{profile.isLogined && <img src="./public/UserRounded.svg" />}
					</NavLink>
				</li>
				{!profile.isLogined?<>
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
