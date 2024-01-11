
import './Paragraph.css';

function Paragraph({ children, className }) {
	const cl = 'paragraph' + (className?' ' + className: '');

	return (
		<p className={cl}>{children}</p>
	);
}

export default Paragraph;
