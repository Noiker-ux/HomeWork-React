
import style from './Search.module.css';
import Handling from '../Handling/Handling';
import Paragraph from '../Paragraph/Paragraph';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useState, useRef } from 'react';

function Search() {
	const [films, setFilms]= useState('');

	const refInput = useRef<HTMLInputElement | null>(null);
	const refButton = useRef<HTMLButtonElement | null>(null);


	const querySearch = () => {
		if (refInput.current){
			const valueInput = refInput.current.value;
			setFilms(valueInput);
			console.log(valueInput);
		}
	};



	return (
		<div className={style['search-block']}>
			<Handling text="Поиск" />
			<Paragraph className="paragraph-small" text='Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'></Paragraph>
			<div className={style['search']}>
				<Input placeholder='Введите название' icon="./search.svg" ref={refInput}/>
				<Button text='Искать' onClick={querySearch} ref={refButton}/>
			</div>
		</div>
	);
}

export default Search;
