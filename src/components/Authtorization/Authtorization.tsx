
import style from './Authtorization.module.css';
import Handling from '../Handling/Handling';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { MouseEvent, useContext, useRef } from 'react';
import { UserContext } from '../../context/user.context';
import { IContextValue, IUser } from '../../context/userContext.types'

function Authtorization() {
	const { saveDataProfile } = useContext<IContextValue>(UserContext);

	const refInputLog = useRef<HTMLInputElement | null>(null);
	const refButtonLog = useRef<HTMLButtonElement | null>(null);

	let dataFromLocalStorage = JSON.parse(localStorage.getItem('profiles') || '[]');

	const handleAuth = (event:MouseEvent) => {
		event.preventDefault(); 
		if (refInputLog.current){
			const inputValue = refInputLog.current.value;
			const haveProfile = (dataFromLocalStorage.find((e:IUser)=>e.name === inputValue));
			if (!haveProfile && inputValue.trim().length){
				const newProfile = {
					'name': inputValue,
					'isLogined': true
				};
				dataFromLocalStorage.push(newProfile);
				localStorage.setItem('profiles', JSON.stringify(dataFromLocalStorage));
				saveDataProfile(newProfile);
			} else {
				const idProfile = dataFromLocalStorage.findIndex((e:IUser) => e.name === inputValue);
				let stateProfile = dataFromLocalStorage[idProfile];
				stateProfile.isLogined = true;
				dataFromLocalStorage[idProfile].isLogined=true;
				localStorage.setItem('profiles', JSON.stringify(dataFromLocalStorage));
				saveDataProfile(stateProfile);
			}
		} else {
			console.log('Ошибка авторизации')
		}
	};

	return (
		<form className={style['auth-block']}>
			<Handling text="Вход" />
			<Input placeholder='Ваше имя' ref={refInputLog}/>
			<Button text='Войти в профиль' ref={refButtonLog} onClick={handleAuth}/>
		</form>
	);
}

export default Authtorization;
