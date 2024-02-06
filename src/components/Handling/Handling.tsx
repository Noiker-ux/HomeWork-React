import style from './Handling.module.css';
import classNames from 'classnames';

function Handling({ text, className }:{ text: string, className?:string}) {
	return (
		<h1 className={classNames(style['handling'], style[`${className}`])}>{text}</h1>
	);
}

export default Handling;
