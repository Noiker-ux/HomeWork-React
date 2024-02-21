
import style from './Authtorization.module.css';
import Handling from '../Handling/Handling';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { MouseEvent, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { ActionStore } from '../../store/store';
import { profileAction } from '../../store/profile.slice';
import { gameAction } from '../../store/games.slice';
import ILocalStorage from '../../helpers/ILocalStorage';


export default function Authtorization() {
	let navigate = useNavigate();
	const dispatch = useDispatch<ActionStore>();

	const refInputLog = useRef<HTMLInputElement | null>(null);

	const handleAuth = (event:MouseEvent) => {
		event.preventDefault(); 
		let dataFromLocalStorage = JSON.parse(localStorage.getItem('profiles') as string);
		if (refInputLog.current){
			const inputValue = refInputLog.current.value;
			const haveProfile = (dataFromLocalStorage.find((e:ILocalStorage) => e.name === inputValue ));
			if (!haveProfile && inputValue.trim().length){
				const newProfile = {
					'name': inputValue,
					'isLogined': true,
					'myGames': []
				};
				dataFromLocalStorage.push(newProfile);
				localStorage.setItem('profiles', JSON.stringify(dataFromLocalStorage));
				dispatch(profileAction.login({'name': inputValue, 'isLogined': true}))
				dispatch(gameAction.login({games: []}))
			} else {
				const idProfile = dataFromLocalStorage.findIndex((e:ILocalStorage) => e.name === inputValue);
				let stateProfile = dataFromLocalStorage[idProfile];
				stateProfile.isLogined = true;
				dataFromLocalStorage[idProfile].isLogined=true;
				localStorage.setItem('profiles', JSON.stringify(dataFromLocalStorage));
				dispatch(profileAction.login({'name': inputValue, 'isLogined': true}))
				dispatch(gameAction.login({games: dataFromLocalStorage[idProfile].myGames}))
			}
			refInputLog.current.value = '';
			navigate("/");
		} else {
			console.error('Ошибка авторизации')
		}
	};

	return (
		<form className={style['auth-block']}>
			<Handling text="Вход" />
			<Input placeholder='Ваше имя' ref={refInputLog}/>
			<Button text='Войти в профиль' onClick={handleAuth}/>
		</form>
	);
}

