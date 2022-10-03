import React, { ChangeEvent } from "react";
import { Search } from '@mui/icons-material';
import { styled, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import { SearchValue } from "../../types";

interface Search {
    searchValue: SearchValue
    customTheme:ThemeOptions
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}


const CustomSearch = styled(Search)(() => ({
    color: "inherit",
}))




const SearchInput: React.FC<Search> = ({ searchValue, onChange,customTheme }) => {
    return <div id="search__area">

        <label htmlFor="search_country" id="search__icon">
            <ThemeProvider theme={customTheme} >
                <CustomSearch />
            </ThemeProvider>
        </label>
        <input type="search" name="search_country" id="input" value={searchValue.value} onChange={onChange}  placeholder="Search for a country..." />
    </div>
}
export default SearchInput;