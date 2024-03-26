import { ButtonHTMLAttributes, forwardRef } from 'react';
import style from './Button.module.css';
import classNames from 'classnames';

interface IPropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string
}

const Button = forwardRef<HTMLButtonElement, IPropsButton>(function Button({ text, ...props }, ref) {
	return (
		<button ref={ref} className={classNames(
			style['button'], 
			style['primary'])
		} 
		{...props}>{text}</button>
	);
});

export default Button;
