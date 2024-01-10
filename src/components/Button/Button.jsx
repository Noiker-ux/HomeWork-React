
import './Button.css';

function Button({ children }) {
	return (
		<button className='button primary'>{children}</button>
	);
}

export default Button;
