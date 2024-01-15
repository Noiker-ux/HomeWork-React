import style from './Input.module.css';
import cn from 'classnames';

function Input({placeholder, icon}) {
	return (
		<div className={style['input-wrapper']}>
			<img src={icon} alt="Поиск" className={icon ? style['placeholder-icon']:style['no-icon']} />
			<input className={cn(style['input'], icon?style['has-icon']:'')}  type="text" placeholder={placeholder} />
		</div>
	);
}

export default Input;
