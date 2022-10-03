
export interface FetchData {
    name: string|null,
    nativeName: string|null
    population: string|null,
    languages: object|null,
    region: string|null,
    subregion: string|null,
    currencies: string[]|null,
    borders: string[]|null
}
export type selector = object;
export interface SearchValue{value:string,active:boolean}
export interface SelectValue{ value: string, label: string,active:boolean }

export interface Res {
    name: string | null,
    nativeName: string,
    population: number,
    region: string,
    capital: string,
    languages: [{ name: string }],
    flags: { svg: string },
    subregion: string,
    currencies: string,
    topLevelDomain: string[],
    borders: string[],
    alpha3Code: string
}
export type arrayObject = object[]


export interface Selector {
    selector: selector
}

export type ContextContainer = {
    children: React.ReactNode
}
export interface ContextAction {
    shareInfo: (selectCard: object) => void
    selectCard: object | null
}
export interface ContextStateAction {
   state:boolean
}
