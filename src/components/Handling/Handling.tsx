
import { ReactNode } from 'react';
import style from './Handling.module.css';

function Handling({ text }:{ text: string}) {
	return (
		<h1 className={style['handling']}>{text}</h1>
	);
}

export default Handling;
