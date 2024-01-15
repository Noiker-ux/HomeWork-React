
import style from './Logo.module.css';

function Logo() {
	return (
		<a href="#" className={style['logo-link']}>
			<img src="./Logo.svg" alt="Логотип" className={style['logo-img']} />
		</a>
	);
}

export default Logo;
