
import { StylesConfig } from "react-select"
import { CountryOptions } from "./CustomDropDownIndicator"

export const selectStyle=(stateColor:boolean)=>{
    const breakpointMINMAX=[{min:500,max:2000},{min:375,max:475}]
    const mq=breakpointMINMAX.map((bp)=>{
        return `@media screen and (min-width:${bp.min}px) and (max-width:${bp.max}px)`
    })
   
    const myStyle: StylesConfig<CountryOptions, false> = {
        control: (css, state) => ({
            ...css,
            width: '200px',
            height: '50px',
            paddingLeft: "20px",
            border: state.isFocused ? 0 : 0,
            boxShadow: state.isFocused ? 'none' : 'none',
            color: "inherit",

        }),
        container:(css)=>({...css,
            [mq[0]]:{
        
                marginRight:"3vw",
            }
        }),
        indicatorsContainer:(css: any)=>({...css,
            color: stateColor ? "white" : "black"
        }),
        option: (css, state) => ({
            ...css,
            height: "40px",
            backgroundColor: state.isSelected ? "hsl(207, 26%, 8%, 0.5)" : "none",
            paddingLeft: "20px",
            paddingTop: "10px",
            ":active": {
                ...css[":active"],
                backgroundColor: "hsl(207, 26%, 17%)"
            }
        })
        ,
        singleValue: (css) => ({
            ...css,
            color: "inherit"
        }),
        placeholder: (css) => ({
            ...css,
            color: "inherit"
        }),
        menuList: (css) => ({
            ...css,
            width: '200px',
            background: stateColor ? 'hsl(209, 23%, 22%)' : "hsl(0, 0%, 100%)",
            color: "inherit",           
        }),
        menu: (css) => ({
            ...css,
            width: '200px',
            background: stateColor ? 'hsl(209, 23%, 22%)' : "hsl(0, 0%, 100%)",                     
        }),
        indicatorSeparator: (css) => ({
            ...css,
            display: 'none'
        }),
        dropdownIndicator: (css) => ({
            ...css,
            color: stateColor ? "white" : "black",
            ":active": {
                ...css[":active"],
                transform: "rotate(180deg)"
            },
            ":hover": {
                ...css[":hover"],
                color: stateColor ? "white" : "black"
            },
        })
    }
    return myStyle
}