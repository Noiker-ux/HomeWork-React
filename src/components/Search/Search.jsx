
import './Search.css';
import Handling from '../Handling/Handling';
import Paragraph from '../Paragraph/Paragraph';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useState } from 'react';

function Search() {
	const [films, setFilms]= useState('');

	const querySearch = () => {
		const valueInput = document.querySelector('.input').value;
		setFilms(valueInput);
		console.log(valueInput);
	};

	return (
		<div className="search-block">
			<Handling text="Поиск" />
			<Paragraph className="paragraph-small">Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
			<div className="search">
				<Input placeholder='Введите название' icon="./search.svg"/>
				<Button text='Искать' onClick={querySearch}/>
			</div>
		</div>
	);
}

export default Search;
