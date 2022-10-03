import React from "react"
import CardSchema from "../components/ComponentsMapSchema";


const mapJSON = (arrayItem: object | object[], item: React.FC) => Object.values(arrayItem).map(item)
export const loadingRender = (selector: object | object[]) => {
    if (!selector) {
        return null
    }
    return mapJSON(selector, CardSchema)
}


// Set Borders Names
const setBordersNameArray = (borders: string[], selector: object | object[]) => borders.map((item: string) => {


    const bordersName: string[] = [];
    if (!Array.isArray(selector)) {
        return null
    }
    selector.forEach((alfaCode) => {

        if (!alfaCode) {
            return null
        }
        const isAlfaEq = alfaCode["alpha3Code" as keyof object] == item;
        if (isAlfaEq) {
            bordersName.push(alfaCode["name" as keyof object])
        }
    })
    console.log(bordersName);
    return bordersName
})

const getBordersNames = (borders: string[] | undefined, selector: object | object[]) => {
    if (!borders) {
        return null
    }
    return setBordersNameArray(borders, selector)
}
export const renderItemList = (borders: string[] | undefined, selector: object | object[],stateColor:boolean) => {
    const bordersArr = getBordersNames(borders, selector)
    const renderBorderItem = bordersArr?.map((item, index) => item?<li className="info__item" style={{backgroundColor:stateColor? "hsl(208, 23%, 22%)" : "hsl(0, 0%, 100%)"}} key={index}>{item}</li>:"None")
    return renderBorderItem
}
