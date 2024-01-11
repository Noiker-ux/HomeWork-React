import './App.css';
// Components
import Search from './components/Search/Search';
// Layouts
import Header from './layouts/Header/Header';
import Body from './layouts/Body/Body';

function App() {

	return (
		<>
			<Header />
			<Body>
				<Search />
			</Body>
		</>
	);
}

export default App; 
