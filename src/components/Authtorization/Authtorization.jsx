
import style from './Authtorization.module.css';
import Handling from '../Handling/Handling';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useContext, useRef } from 'react';
import { UserContext } from '../../context/user.context';

function Authtorization() {
	const { saveDataProfiles } = useContext(UserContext);

	const refInputLog = useRef();
	const refButtonLog = useRef();

	let dataFromLocalStorage = JSON.parse(localStorage.getItem('profiles'));

	const authtorization = (event) => {
		event.preventDefault();
		const inpValue = refInputLog.current.value;
		const haveProfile = (dataFromLocalStorage.find(e=>e.name === inpValue));
		if (haveProfile===undefined && inpValue.trim().length){
			const newProfile = {
				'name': inpValue,
				'isLogined': true
			};
			dataFromLocalStorage.push(newProfile);
			localStorage.setItem('profiles', JSON.stringify(dataFromLocalStorage));
			saveDataProfiles(newProfile);
		} else {
			const idProfile = (dataFromLocalStorage.findIndex(e=>e.name===inpValue));
			let stateProfile = dataFromLocalStorage[idProfile];
			stateProfile.isLogined = true;
			dataFromLocalStorage[idProfile].isLogined=true;
			localStorage.setItem('profiles', JSON.stringify(dataFromLocalStorage));
			saveDataProfiles(stateProfile);
		}
	};




	return (
		<form className={style['auth-block']}>
			<Handling text="Вход" />
			<Input placeholder='Ваше имя' ref={refInputLog}/>
			<Button text='Войти в профиль' ref={refButtonLog} onClick={authtorization}/>
		</form>
	);
}

export default Authtorization;
