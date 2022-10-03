import React,{ useState} from "react";
import { ContextAction, ContextContainer } from "../types";


const shareContext=React.createContext<ContextAction|null>(null);

export const SelectCardStore=(props:ContextContainer)=>{

    const [selectCard,setSelectInfo]=useState<object|null>({})
    const setShareInfo=(selectCard:object)=>{
        setSelectInfo(selectCard)
    }

    return<shareContext.Provider value={{...selectCard,shareInfo:setShareInfo,selectCard}}>
        {props.children}
    </shareContext.Provider>
}
export default shareContext;