
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



export default function Authtorization() {
	let navigate = useNavigate();
	const dispatch = useDispatch<ActionStore>();

	const refInputLog = useRef<HTMLInputElement | null>(null);
	const refButtonLog = useRef<HTMLButtonElement | null>(null);

	let dataFromLocalStorage = JSON.parse(localStorage.getItem('profiles') || '[]');

	const handleAuth = (event:MouseEvent) => {
		event.preventDefault(); 
		if (refInputLog.current){
			const inputValue = refInputLog.current.value;
			const haveProfile = (dataFromLocalStorage.find((e:any)=>e.name === inputValue));
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
				const idProfile = dataFromLocalStorage.findIndex((e:any) => e.name === inputValue);
				let stateProfile = dataFromLocalStorage[idProfile];
				stateProfile.isLogined = true;
				dataFromLocalStorage[idProfile].isLogined=true;
				localStorage.setItem('profiles', JSON.stringify(dataFromLocalStorage));
				dispatch(profileAction.login({'name': inputValue, 'isLogined': true}))
				console.log(dataFromLocalStorage[idProfile].myGames);
				
				dispatch(gameAction.login({games: dataFromLocalStorage[idProfile].myGames}))
			}
			refInputLog.current.value = '';
			navigate("/");
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

