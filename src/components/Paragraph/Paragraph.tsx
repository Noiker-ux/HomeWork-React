import style from './Paragraph.module.css';
import classnames from 'classnames';

interface IParagraphProps {
	text: string,
	className?: string
}

function Paragraph({ text, className }:IParagraphProps) {
	return (
		<p className={classnames(style['paragraph'], (className && style[className]))}>{text}</p>
	);
}

export default Paragraph;
