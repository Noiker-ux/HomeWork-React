import { useState } from 'react';
import { createContext } from 'react';

export const UserContext = createContext({
	name:null,
	isLogined:false
});

export const UserContextProvider = ({ children }) => {
	const [profiles, setProfiles] = useState({name:null,isLogined:false});
    
	const saveDataProfiles = (newProfile) => {
		setProfiles({
			'name': newProfile.name,
			'isLogined': newProfile.isLogined
		});
	};

	return (
		<UserContext.Provider value={{ profiles, saveDataProfiles }}>
			{children}
		</UserContext.Provider>
	);
};