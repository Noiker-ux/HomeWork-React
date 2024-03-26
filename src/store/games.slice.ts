import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import ILocalStorage from '../helpers/ILocalStorage';

interface IGames {
    games: number[];
}

const setInitData = () => {
    if (localStorage.getItem('profiles') === null) {
        localStorage.setItem('profiles','[]');
    }
    const dataFromLocalStorage = JSON.parse(localStorage.getItem('profiles') as string);
    const authProfile = dataFromLocalStorage.find((el:ILocalStorage) => el.isLogined)
    if (!authProfile){
        return {games:[]};
    }
    return {games: authProfile.myGames};
}


export const gameSlice = createSlice({
    name: '/games',
    initialState: setInitData(),
    reducers: {
       logout: (state) => {
        state.games = [];
       },
       login: (state, action:PayloadAction<IGames>) => {
        state.games = action.payload.games; 
       },
       add: (state, action:PayloadAction<number>) => {
        state.games.push(action.payload);
       },
       remove: (state, action:PayloadAction<number>) => {
        state.games = state.games.filter((e:number) => e != action.payload)
       }
    }
})

export default gameSlice.reducer;
export const gameAction = gameSlice.actions;