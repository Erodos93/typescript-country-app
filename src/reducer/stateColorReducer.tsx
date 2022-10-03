
import { createSlice} from "@reduxjs/toolkit";


interface ChangeColor{
    changeColorReducer: { stateColor: boolean }
}
const initialState:{stateColor:boolean}={
    stateColor:true
}

export const stateChangeColorSlice = createSlice({
    name: "switch",
    initialState,
    reducers: {
        changeColorReducer: (state:{stateColor:boolean}=initialState):void => {
            state.stateColor=!state.stateColor
    
        }
    },
})
export const stateChangeColor=(state: ChangeColor)=>state.changeColorReducer.stateColor
export const changeColorReducer=stateChangeColorSlice.actions.changeColorReducer
export default stateChangeColorSlice.reducer