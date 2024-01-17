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
import { useState } from 'react';

function App() {
	const [profiles, setProfiles] = useState({name:null,isLogined:false});


	const saveDataProfiles = (newProfile) => {
		setProfiles(old => ({
			...old,
			'name': newProfile.name,
			'isLogined': newProfile.isLogined
		}));
	};

	return (
		<>
			<Header profiles={profiles} onLog={saveDataProfiles}/>
			<Body>
				<Authtorization onLog={saveDataProfiles} />
				<Search />
				<FilmList data={INIT_DATA}/>
			</Body>
		</>
	);
}

export default App; 
