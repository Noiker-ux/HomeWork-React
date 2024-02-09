import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "./profile.slice";
import gamesSlice from "./games.slice";



export const store = configureStore({
    reducer:{
        games: gamesSlice,
        profile: profileSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type ActionStore = typeof store.dispatch;