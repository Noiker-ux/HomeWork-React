import style from './Input.module.css';
import classnames from 'classnames';
import { InputHTMLAttributes, forwardRef } from 'react';

interface IPropsInput extends InputHTMLAttributes<HTMLInputElement>{
 	icon?: string;
	placeholder: string;
}

const Input = forwardRef<HTMLInputElement, IPropsInput>(function Input({icon, placeholder, ...props}, ref) {
	return (
		<div className={style['input-wrapper']}>
			<img src={icon} alt="Поиск" className={icon ? style['placeholder-icon']:style['no-icon']} />
			<input ref={ref} className={classnames(style['input'], icon && style['has-icon'])} placeholder={placeholder}  {...props} />
		</div>
	);
});

export default Input;
