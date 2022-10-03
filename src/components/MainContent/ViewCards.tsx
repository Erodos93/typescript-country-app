import React from "react";
import {loadingRender} from "../../function/renderFunction";
import { SearchValue } from "../../types";
import { CountryOptions } from "../Inputs/CustomDropDownIndicator";


interface Selector {
    selector: object
    searchValue: SearchValue
    loadingStatus:string
    result:object[]
    select:CountryOptions
    
}
const ViewCards: React.FC<Selector> = ({ selector,loadingStatus, searchValue,result,select }) => {

    const res=(result.length === 0 && searchValue.value.length === 0 && select.value.length==0) ? selector : result
    
     return loadingStatus=="Ready"?<section className="flex__container--card">
        {loadingRender(res)}
    </section>:<div className="grid__container--loading"><div className="loading">
        <div className="loading__title">Loading...</div>
        </div></div>
        

}

export default ViewCards;