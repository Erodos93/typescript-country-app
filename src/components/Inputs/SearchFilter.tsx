
import React from "react";
import { countryOption,CountryOptions,DropDownIndicator} from "./CustomDropDownIndicator";
import Select,{StylesConfig, SingleValue} from "react-select";
import { selectStyle } from "./SelectStyle";




interface Filter{
    onChange: (newValue:SingleValue<CountryOptions>) => void,
    state:boolean,
    myStyle:StylesConfig<CountryOptions,false>
}

const SearchFilter:React.FC<Filter>=({onChange,state})=>{
    const myStyle=selectStyle(state)
return <Select 

    // openMenuOnClick={false}
    // menuIsOpen={true}
    classNamePrefix="react-select"
    onChange={onChange} 
    closeMenuOnSelect={true}
    // hideSelectedOptions={true}
    placeholder={'Filter by region'}
    options={countryOption}
    styles={myStyle} 
    components={{DropdownIndicator:DropDownIndicator}}
     />
  
}

export default SearchFilter;
