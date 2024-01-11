
import './Input.css';

function Input({placeholder, icon}) {
	const inpClass = icon ? 'input has-icon':'input';
	const imgClass = icon ? 'placeholder-icon':'no-icon';

	return (
		<div className='input-wrapper'>
			<img src={icon} alt="Поиск" className={imgClass} />
			<input className={inpClass}  type="text" placeholder={placeholder} />
		</div>
	);
}

export default Input;
