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
    const parseArr = JSON.parse(localStorage.getItem('profiles') as string);
    const authProfile = parseArr.find((el:ISliceProfile) => el.isLogined)
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