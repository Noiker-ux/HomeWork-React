import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface IProfiles {
    name: string;
    isLogined: boolean;
}

export const RequireApi = ({ children }: {children: ReactNode}) => {
    let data = JSON.parse(localStorage.getItem('profiles') as string);
    const profile = data.find((e:IProfiles) => e.isLogined===true);
    if (profile){
        return children;
    } else {
        return <Navigate to='/login' replace/>
    }  
}