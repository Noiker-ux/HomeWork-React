import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { RootState } from '../../../store/store'
import style from '../Menu.module.css'

export default function Profile() {
	const { name, isLogined} = useSelector((s:RootState) => s.profile)
	
	return (
		<li className={style['menu-item']}>
			<NavLink to={'/profile'} className={({ isActive }) => classNames(style['menu-link'], {
				[style.active]:isActive
			})}>
				{name}{isLogined && <img title='Иконка пользователя' src="./public/UserRounded.svg" />}
			</NavLink>
		</li> 
	);
}