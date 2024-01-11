
import './Body.css';

function Body({children}) {
	return (
		<div className="body">
			<div className="container">
				{children}
			</div>
		</div>
	);
}

export default Body;
