import React from "react";
import { components, DropdownIndicatorProps } from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
library.add(faAngleDown)
library.add(faAngleUp)

export interface CountryOptions {
    readonly value: string,
    readonly label: string,
    readonly active: boolean,

}

const countryOption: readonly CountryOptions[] = [
    { value: "Africa", label: "Africa", active: true },
    { value: "Americas", label: "Americas", active: true },
    { value: "Asia", label: "Asia", active: true },
    { value: "Europe", label: "Europe", active: true },
    { value: "Oceania", label: "Oceania", active: true }
]

const AnglesDownIcon = () => {
    return <FontAwesomeIcon icon="angle-down" />
}
const AnglesUpIcon = () => {
    return <FontAwesomeIcon icon="angle-up" />
}


 const DropDownIndicator=(props:DropdownIndicatorProps<CountryOptions,false>)=>{
     const {selectProps:{
         menuIsOpen
        }}=props
    return <components.DropdownIndicator {...props}>
        {menuIsOpen?<AnglesUpIcon/>: <AnglesDownIcon/>} 

    </components.DropdownIndicator>
}

export { countryOption, DropDownIndicator};