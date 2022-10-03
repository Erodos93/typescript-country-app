import React, { ChangeEvent, useEffect, useState } from 'react';
import Header from './components/layout/Header';
import $ from "jquery";
import Home from './components/pages/Home';
import { useAppDispatch, useAppSelector } from './hooks';
import { countryAllSelector, filterData } from './reducer/countryNameReducer';
import { SelectCardStore } from './context/ShareDataContext';
import { CountryOptions } from './components/Inputs/CustomDropDownIndicator';
import { SingleValue } from 'react-select';
import DetailPage from './components/pages/DetailPage';

import { changeColorReducer } from './reducer/stateColorReducer';
import { selectStyle } from './components/Inputs/SelectStyle';
import { SearchValue, SelectValue } from './types';


const App: React.FC = () => {
    const dispatch = useAppDispatch();

    //inicializa proměných a stavu pro componentu SearchInput a SearchFilter
    const [search, setValue] = useState<SearchValue>({
        value: "",
        active: false
    });
    const [select, setSelect] = useState<SelectValue>({ value: "", label: "", active: false });
    //Selectory 
    const selectorAllCountry = useAppSelector(countryAllSelector);
    const searchInput = useAppSelector(state => state.filterReducer.result);
    const loadingStatus=useAppSelector(state=>state.searchAllCountryReducer.status)
    const stateColor = useAppSelector(state => state.switchReducer.stateColor);
    const myStyle = selectStyle(stateColor)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue({ ...search, value: e.currentTarget.value })
    };
    useEffect(() => {

        dispatch(filterData({
            responseData: selectorAllCountry,
            search: search,
            select: select,
            result: searchInput,
            stateColor:stateColor//pokus o opravení bugu kdy se po změně barvy a filtrovaní země vrátí barva na defaultní hodnotu
        }))
      
    }, [search, select, dispatch])

    useEffect(() => {
        const colorPallete={
            mainBackground:stateColor ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)",
            otherElements:stateColor ? "hsl(208, 23%, 22%)" : "hsl(0, 0%, 100%)",
            filterDarkToLight:stateColor ? "invert(0)" : "invert(1)",
            filterLightToDark:stateColor ? "invert(1)" : "invert(0)"
        }
 
        $("#root").css("color", stateColor ? "white" : "black")

        $("body,.detail__section").css("background",colorPallete.mainBackground)
        // $("body,#homepage,.grid__container,.detail__section").css("background", stateColor ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)")
        $(".nav__box,.button__back,.react-select__control,#input,.country__card").css("background-color", colorPallete.otherElements)
        $("#arrow-back").css("filter", colorPallete.filterLightToDark)
        $("#logo").css("filter", colorPallete.filterDarkToLight)
        // $("#input,.country__card").css("background-color", )
    })

    const changeColor = () => {
        dispatch(changeColorReducer())
    }


    const onChangeFilter = (newValue: SingleValue<CountryOptions>) => {
        $(".country__card").css("background", stateColor ? "hsl(208, 23%, 22%)" : "hsl(0, 0%, 100%)")
        setSelect(newValue ?? { value: "", label: "", active: true })

    }
    return <>
        <Header onClick={changeColor} />

        <SelectCardStore>
            <Home selector={selectorAllCountry}
                onChangeSearch={onChange}
                onChangeFilter={onChangeFilter}
                loadingStatus={loadingStatus}
                select={select}
                searchValue={search}
                result={searchInput}
                stateColor={stateColor}
                myStyle={myStyle}
            />
            <DetailPage selector={selectorAllCountry} stateColor={stateColor}/>
        </SelectCardStore>

    </>
}

export default App


