import './App.css';
// Components
import Search from './components/Search/Search';
// Layouts
import Header from './layouts/Header/Header';
import Body from './layouts/Body/Body';
import FilmList from './components/FilmsList/FilmsList';
// data
import { INIT_DATA } from './assets/InitData';

function App() {

	return (
		<>
			<Header />
			<Body>
				<Search />
				<FilmList data={INIT_DATA}/>
			</Body>
		</>
	);
}

export default App; 
