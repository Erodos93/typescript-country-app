import { createAsyncThunk, createSlice, Slice } from "@reduxjs/toolkit"
import { FC } from "react"
import jsonCountryData from "../apis/jsonCountryData"
import { asyncFilterBySearchValue, sliceJSONItem } from "../function/filterFunction"
import { populationEdit } from "../function/formatingFunction"

import { FetchData, Res, /*Info */ } from "../types"
import { RootState } from "./store"

type Search = object
enum Status{
    LOADING="Loading",
    READY="Ready",
    ERROR="Error"
}
const initialState: { data: FetchData | object, result: object[] ,status:string} = {
    data: [],
    result: [],
    status:Status.LOADING
}
let stateAllCountries;
const fetchAllData = () => {
    return jsonCountryData.get(`/all?fields=name,capital,population,languages,region,flags,currencies,topLevelDomain,subregion,nativeName,borders,alpha3Code`).then(res => {

        if (res.statusText !== "OK") {
            throw new Error("Data from server are incomplete");
        }
        return res
    })
}


const loadingData = (jsonToArray: object) => {
    if (!jsonToArray) {
        return null
    }
    try {
        const data = Array.isArray(jsonToArray) ? jsonToArray.map(({ name,
            nativeName,
            population,
            region,
            capital,
            languages,
            flags,
            subregion,
            currencies,
            topLevelDomain,
            borders,
            alpha3Code }: Res): object | null => {


            if (!(languages && flags && topLevelDomain && currencies && population)) {
                return null
            }

            const populationString: string | null = populationEdit(population);
            const currenciesString = Array.isArray(currencies) ? currencies.map(({ name }) => name).join(",") : ""
            const languagesString: string = Array.isArray(languages) ? languages.map(({ name }) => name).join(",") : ""

            return {
                name: name,
                nativeName: nativeName,
                population: populationString,
                region: region,
                capital: capital,
                languages: languagesString,
                flags: flags.svg,
                subregion: subregion,
                currencies: currenciesString,
                topLevelDomain: topLevelDomain,
                borders: borders,
                alpha3Code: alpha3Code
            }
        }) : []
        return data
    } catch (error) {
        window.alert(error);

    }

}

export const searchAllData = createAsyncThunk<FetchData | object>(
    "reducer/fetchAllData",
    async () => {
        const response = await fetchAllData();
        return loadingData(response.data)
    })
export const countryAllSelector = (state: RootState) => {
    stateAllCountries = state.searchAllCountryReducer.data;
    return stateAllCountries
}

export const searchAllCountrySlice = createSlice({
    name: "searchAllCountryReducer",
    initialState,
    reducers: {
    },
    extraReducers:
        (builder) => {
            builder.addCase(searchAllData.pending, (state) => {
                state.status=Status.LOADING;
            }),
                builder.addCase(searchAllData.fulfilled, (state, action) => {
                    state.status=Status.READY
                    state.data = action.payload
                  
                })
        }


})

export const filterSlice = createSlice({
    name: "filterReducer",
    initialState,
    reducers: {
        //Pokus o redux fitrovani mezi objecty
        filterData: (state, action) => {
            let resultFilter: object[] = []
            resultFilter = asyncFilterBySearchValue(action.payload.search, action.payload.select,action.payload.responseData)    
            return { ...state, result: [...resultFilter] }
        }
    },
})

export const { filterData } = filterSlice.actions
export default filterSlice.reducer;