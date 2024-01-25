import './App.css';
// Components
import Search from './components/Search/Search';
// Layouts
import Header from './layouts/Header/Header';
import Body from './layouts/Body/Body';
import FilmList from './components/FilmsList/FilmsList';
// data
import { INIT_DATA } from './assets/InitData';
import Authtorization from './components/Authtorization/Authtorization';
import { UserContextProvider } from './context/user.context';


function App() {
	if (!localStorage.getItem('profiles')){
		localStorage.setItem('profiles','[]');
	}

	return (
		<UserContextProvider>
			<Header />
			<Body>
				<Authtorization/>
				<Search />
				<FilmList data={INIT_DATA}/>
			</Body>
		</UserContextProvider>
	);
}

export default App; 
