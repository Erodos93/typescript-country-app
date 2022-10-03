import { createTheme} from '@mui/material/styles';

export const LightTheme = createTheme({
    palette: {
        text: {
            primary: "#000",
        },
        background: {
            default: "hsl(0, 0%, 98%)"
        },
        action:{
            focus:"none"
        }
    }
}
)
export const DarkTheme = createTheme({
    palette: {
            text:{
                primary:"#FFF"
            },
            background:{
                default:"hsl(207, 26%, 17%)"
            },
            action:{
                focus:"none"
            }

    }
})

