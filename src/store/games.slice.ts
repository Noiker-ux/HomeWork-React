import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IGames {
    games: number[];
}

const setInitData = () => {
    const dataFromLocalStorage = localStorage.getItem('profiles');
    if (!dataFromLocalStorage){
        return {games:[]};
    }
    const parseArr = JSON.parse(dataFromLocalStorage);
    const authProfile = parseArr.find((el:any) => { return (el.isLogined === true)})
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