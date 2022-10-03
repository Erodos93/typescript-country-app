


import { SearchValue, SelectValue } from "../types";
export const sliceJSONItem = (jsonItem: object, key: string) => JSON.stringify(jsonItem?.[key as keyof object])?.slice(1, -1)
export const matchingSearchString = (jsonValue: string, matchValue: string) => jsonValue?.toLowerCase()?.charAt(matchValue.length - 1)
    .indexOf(matchValue.charAt(matchValue.length - 1)) === 0
export const matchingResultBySelect = (selectValue: string, matchValue: string) =>selectValue?.toLowerCase() === matchValue?.toLowerCase() ?? matchValue

const asyncFilterBySearchValue = (search: SearchValue, select: SelectValue, data: object[]) => {

    const active=select.active
    const searchValue=search.value
    const resultFilter = data.filter((d: object) => {
    let allInputsActive = false
        const setFilter = {
            countryName: sliceJSONItem(d, "name"),
            selectRegion: sliceJSONItem(d, "region"),
            isInput: searchValue.length > 0,
            isSelect: active,
            isFullSearch:(isInput:boolean,isSelect:boolean)=>{
                return (isInput && isSelect)
            }
        }
        allInputsActive=setFilter.isFullSearch(setFilter.isInput,setFilter.isSelect);
        switch (allInputsActive) {
            case false: {
                if (setFilter.isInput) {
                    return matchingSearchString(setFilter.countryName, searchValue) && setFilter.countryName
                        ?.toLowerCase()
                        ?.slice(0, searchValue.length) === searchValue
                } else {
                    return matchingResultBySelect(setFilter.selectRegion, select.value)
                }
            }
            case true: {
                return matchingResultBySelect(setFilter.selectRegion, select.value) 
                && matchingSearchString(setFilter.countryName, searchValue) && setFilter.countryName
                    ?.toLowerCase()
                    ?.slice(0, searchValue.length) === searchValue
            }
        }
    })
    return resultFilter

}
export { asyncFilterBySearchValue };


