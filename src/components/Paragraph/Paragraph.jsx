import style from './Paragraph.module.css';
import cn from 'classnames';

function Paragraph({ children, className }) {
	return (
		<p className={cn(style['paragraph'], (className?style[className]:''))}>{children}</p>
	);
}

export default Paragraph;
