import React, { useContext } from "react"
// import { selector } from "../types"
import CountryCard from "./MainContent/Card"
import shareContext from "../context/ShareDataContext"
// let count=0;
type objectString={
    [key:string]:string
}
const CardSchema=(items:objectString, index:number):JSX.Element|null => {        
     const context=useContext(shareContext);      
     if (!items) {
        return null
     }
     const {name,population,region,capital,flags}=items
    return <div key={index} onClick={()=>context?.shareInfo(items)}>
    <CountryCard  name={name}
        population={population}
        region={region}
        capital={capital}
        flag={flags}
         />
    </div>
}

export default CardSchema;
