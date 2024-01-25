
import { ReactNode } from 'react';
import './Body.css';

function Body({children}:{children:ReactNode}) {
	return (
		<div className="body">
			<div className="container">
				{children}
			</div>
		</div>
	);
}

export default Body;
