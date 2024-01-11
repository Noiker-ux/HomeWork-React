
import './Header.css';
import Menu from '../../components/Menu/Menu';
import Logo from '../../components/Logo/Logo';

function Header() {
	return (
		<header>
			<div className="container">
				<div className="header-inner">
					<Logo />
					<Menu />
				</div>
			</div>
		</header>
	);
}

export default Header;
