import './App.css';
import Button from './components/Button/Button';
import Handling from './components/Handling/Handling';
import Paragraph from './components/Paragraph/Paragraph';

function App() {

	return (
		<>
			<Button>Искать</Button>
			<Handling>Вход</Handling>
			<Paragraph>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
		</>
	);
}

export default App; 
