import {createTheme} from '@mui/material/styles';
import KalameFont from '../assets/fonts/KalamehWeb-Regular.woff2';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#62368b',
        },
        background: {
            main: "#eff3f6",
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url("${KalameFont}") format('woff2');
}`,
        },
    },

    typography: {
        fontFamily: ["Yekan", "Roboto"].join(","),

    },
    direction: 'rtl',
});


export default lightTheme;