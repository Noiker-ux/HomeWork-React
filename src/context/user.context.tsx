import { ReactNode, useState } from 'react';
import { createContext } from 'react';
import { IUser, IContextValue } from './userContext.types'



export const UserContext = createContext<IContextValue>({
	profile: {
		name:null,
		isLogined:false
	},
	saveDataProfile: ()=>{console.log(`Ошибка чтения котекста`);
	}
});

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
	const [profile, setProfile] = useState<IUser>({ name: null, isLogined: false });
    
	const saveDataProfile = (newProfile:IUser):void => {
		setProfile({
			'name': newProfile.name,
			'isLogined': newProfile.isLogined
		});
	};

	return (
		<UserContext.Provider value={{ profile, saveDataProfile }}>
			{children}
		</UserContext.Provider>
	);
};