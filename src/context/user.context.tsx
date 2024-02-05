import { ReactNode, useState } from 'react';
import { createContext } from 'react';
import { IUser, IContextValue } from './userContext.types'

let profileForContext:IUser;

if (!localStorage.getItem('profiles')){
	profileForContext = {
		name:null,
		isLogined:false
	}
} else {
	const dataProfiles = JSON.parse(localStorage.getItem('profiles') as string)
	profileForContext = dataProfiles.find((e: IUser) => e.isLogined === true);
}



export const UserContext = createContext<IContextValue>({
	profile: {
		...profileForContext
	},
	saveDataProfile: ()=>{console.log(`Ошибка чтения котекста`);
	}
});

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
	const [profile, setProfile] = useState<IUser>({...profileForContext});
    
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