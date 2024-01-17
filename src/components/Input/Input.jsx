import style from './Input.module.css';
import cn from 'classnames';
import { forwardRef } from 'react';

const Input = forwardRef(function Input({placeholder, icon}, ref) {
	return (
		<div className={style['input-wrapper']}>
			<img src={icon} alt="Поиск" className={icon ? style['placeholder-icon']:style['no-icon']} />
			<input ref={ref} className={cn(style['input'], icon?style['has-icon']:'')}  type="text" placeholder={placeholder} />
		</div>
	);
});

export default Input;
