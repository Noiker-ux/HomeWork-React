import classNames from "classnames"
import { NavLink, useNavigate } from "react-router-dom"
import style from '../Menu.module.css'
import { useDispatch, useSelector } from "react-redux"
import { ActionStore, RootState } from "../../../store/store"
import { gameAction } from "../../../store/games.slice"
import { ISliceProfile, profileAction } from "../../../store/profile.slice"
import { MouseEvent } from 'react'

export default function AuthtorizationItem () {
    const { name, isLogined } = useSelector((s:RootState) => s.profile)
	
    const dispatch = useDispatch<ActionStore>();
    const navigate = useNavigate()

    const handleClickExit = (e: MouseEvent) => {
		e.preventDefault();
		let dataFromLocalStorage = JSON.parse(localStorage.getItem('profiles') as string);
		const idProfile = dataFromLocalStorage.findIndex((elprofile:ISliceProfile) => elprofile.name === name);
		dataFromLocalStorage[idProfile].isLogined = false;
		localStorage.setItem('profiles', JSON.stringify(dataFromLocalStorage));
		dispatch(profileAction.logout())
		dispatch(gameAction.logout())
		navigate("/login");
	};

    return (
        <>
        	{!isLogined?<li className={style['menu-item']}>
				<NavLink  to={'/login'} className={({ isActive }) => classNames(style['menu-link'],{
					[style.active]:isActive
				})}>
					Войти
					<img src="./Login.svg" alt="Войти" />
				</NavLink>
			</li>:<li onClick={handleClickExit} className={style['menu-item']}>
				<a className={style['menu-link']} href='/'>Выйти</a>
				<img src="./Login.svg" alt="Войти" />
			</li>
			}
        </>
    )
}