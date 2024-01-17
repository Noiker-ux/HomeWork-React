
import './Header.css';
import Menu from '../../components/Menu/Menu';
import Logo from '../../components/Logo/Logo';

function Header({ profiles, onLog }) {
	return (
		<header>
			<div className="container">
				<div className="header-inner">
					<Logo />
					<Menu onLog={onLog} profiles={profiles} />
				</div>
			</div>
		</header>
	);
}

export default Header;
