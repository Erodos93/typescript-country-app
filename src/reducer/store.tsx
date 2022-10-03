import { configureStore } from "@reduxjs/toolkit";
import { filterSlice, searchAllCountrySlice} from "./countryNameReducer";
import { stateChangeColorSlice } from "./stateColorReducer";


export const store=configureStore({
reducer:{
    searchAllCountryReducer:searchAllCountrySlice.reducer,
    filterReducer:filterSlice.reducer,
    switchReducer:stateChangeColorSlice.reducer
}});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch