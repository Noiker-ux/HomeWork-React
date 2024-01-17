import { forwardRef } from 'react';
import style from './Button.module.css';
import cn from 'classnames';

const Button = forwardRef(function Button({ text, onClick }, ref) {
	return (
		<button ref={ref} className={cn(style['button'], style['primary'])} onClick={onClick}>{text}</button>
	);
});

export default Button;
