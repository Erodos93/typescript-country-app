import React, { ChangeEvent } from "react";
import SearchInput from "../Inputs/SearchInput";
import SearchFilter from "../Inputs/SearchFilter";
import { DarkTheme, LightTheme } from "./themes";
import ViewCards from "../MainContent/ViewCards";
import { SingleValue, StylesConfig } from "react-select";
import { CountryOptions } from "../Inputs/CustomDropDownIndicator";
import { SearchValue } from "../../types";



interface Selector {
    selector: object | object[]
    onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void,
    onChangeFilter: (newValue: SingleValue<CountryOptions>) => void,
    loadingStatus: string
    select: CountryOptions,
    searchValue: SearchValue
    result: object[]
    stateColor: boolean
    myStyle: StylesConfig<CountryOptions, false>
}

const Home: React.FC<Selector> = ({ selector, loadingStatus, onChangeSearch, onChangeFilter, searchValue, result, select, stateColor, myStyle }) => {



    return <main id="homepage">
        <section className="homepage__view--cards">
            <div className={`grid__container view__scroll-container ${result.length > 6 || result.length == 0 ? "" : "view__hidden"}`}>
            <div className="flex__container inputs">
                <SearchInput searchValue={searchValue} onChange={onChangeSearch} customTheme={stateColor ? DarkTheme : LightTheme} />
                <div className="white-space"></div>
                <SearchFilter onChange={onChangeFilter} state={stateColor} myStyle={myStyle} />
            </div>
                <ViewCards selector={selector}
                    loadingStatus={loadingStatus}
                    searchValue={searchValue}
                    result={result}
                    select={select} />
            </div>
        </section>
    </main>
}
export default Home;