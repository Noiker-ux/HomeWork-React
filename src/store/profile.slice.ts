import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ISliceProfile {
    name: string,
    isLogined: boolean;

}

const initialState: ISliceProfile = {
    name: '',
    isLogined: false,

}


const getInit = () => {
    const dataFromLocalStorage = localStorage.getItem('profiles');
    if (!dataFromLocalStorage){
        localStorage.setItem('profiles','[]');
        return initialState;
    }
    const parseArr = JSON.parse(dataFromLocalStorage);
    const authProfile = parseArr.find((el:ISliceProfile) => { return el.isLogined === true})
    if(!authProfile){
        return initialState;
    }
    return {name: authProfile.name, isLogined: authProfile.isLogined};
}


export const profileSlice = createSlice({
    name: '/profile',
    initialState: getInit(),
    reducers: {
        login: (state, action: PayloadAction<ISliceProfile>) => {
            state.name = action.payload.name;
            state.isLogined = true;

        },
        logout: (state) => {
            state.name = undefined;
            state.isLogined = false;

        }
    }
})

export default profileSlice.reducer;
export const profileAction = profileSlice.actions;