import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    black: {
      main: '#000000',      
    },
    white: {
      main: '#ffffff',
    },
    greyDark: {
      main: '#333333',
    },
    greyLigth: {
        main: '#999999',
      },
  },
});

export default theme;