import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import style from './Menu.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

export default function Favorite () {
	const favoriteGames = useSelector((s:RootState) => s.games.games)
	const { isLogined } = useSelector((s:RootState) => s.profile)
    
    return (isLogined && <li className={style['menu-item']}>
        <NavLink to={'/favorites'} className={({ isActive }) => classNames(style['menu-link'], {
            [style.active]:isActive
        })}>
            Мои игры
            <span className={style['counter']}>{favoriteGames.length}</span>
        </NavLink>
    </li>)
}