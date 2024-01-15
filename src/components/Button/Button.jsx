import style from './Button.module.css';
import cn from 'classnames';

function Button({ text, onClick }) {
	return (
		<button className={cn(style['button'], style['primary'])} onClick={onClick}>{text}</button>
	);
}

export default Button;
