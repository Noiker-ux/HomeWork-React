
import { NavLink } from 'react-router-dom';
import style from './Logo.module.css';

function Logo() {
	return (
		<NavLink to={'/'} className={style['logo-link']}>
			<img src="./Logo.svg" alt="Логотип" className={style['logo-img']} />
		</NavLink>
	);
}

export default Logo;
