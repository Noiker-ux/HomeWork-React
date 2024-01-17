
import style from './FilmsList.module.css';
import FilmCard from '../FilmCard/FilmCard';
import Handling from '../Handling/Handling';
import Paragraph from '../Paragraph/Paragraph';

function FilmsList({ data }) {
	if (data.length === 0){
		return (
			<div className={style['no-films']}>
				<Handling text='Упс... Ничего не найдено :(' />
				<Paragraph  text ='Попробуйте изменить запрос или ввести более точное название фильма' className='paragraph-medium'/>
			</div>
		);
	}

	const sortStars = (a,b) =>{
		if (a.stars < b.stars){
			return 1;
		}
		return -1;
	};

	return (
		<div className={style['film-list']}>
			{
				data.sort(sortStars).map(film => (
					<FilmCard props={film} key={film.id}/>
				))
			}
		</div>
	);
}

export default FilmsList;
