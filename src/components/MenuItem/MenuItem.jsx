
import style from './MenuItem.module.css';

function MenuItem({text, link}, icon) {
	return (
		<li className={style['menu-item']}>
			<a href={link} className={style['menu-link']}>{text}{icon}</a>
		</li>
	);
}

export default MenuItem;
