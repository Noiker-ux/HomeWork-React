import Menu from '../../components/Menu/Menu';
import Logo from '../../components/Logo/Logo';
import { Outlet } from 'react-router-dom';
import classNames from 'classnames';
import styles from './MenuLayout.module.css'

function MenuLayout() {

	if (!localStorage.getItem('profiles')){
		localStorage.setItem('profiles','[]');
	}


	return (
        <>
		<header>
			<div className="container">
				<div className={styles["header-inner"]}>
					<Logo />
					<Menu/>
				</div>
			</div>
		</header>
        <div className={styles["body"]}>
                <div className={classNames("container", styles["outlet"])}>
                    <Outlet />
                </div>
        </div>
        </>
	);
}

export default MenuLayout;
