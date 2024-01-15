
import style from './Handling.module.css';

function Handling({ text }) {
	return (
		<h1 className={style['handling']}>{text}</h1>
	);
}

export default Handling;
