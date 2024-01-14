
import './MenuItem.css';

function MenuItem({text, link}, icon) {
	return (
		<li className="menu-item">
			<a href={link} className="menu-link">{text}{icon}</a>
		</li>
	);
}

export default MenuItem;
