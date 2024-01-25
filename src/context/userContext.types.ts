export interface IUser{
	name: string | null,
	isLogined: boolean
}

export type ISaveDataProfile = (profile:IUser) => void;

export interface IContextValue {
	profile: IUser
	saveDataProfile: ISaveDataProfile;
}