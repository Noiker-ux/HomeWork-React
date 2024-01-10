
import './Paragraph.css';

function Paragraph({ children }) {
	return (
		<p className='paragraph paragraph-small'>{children}</p>
	);
}

export default Paragraph;
