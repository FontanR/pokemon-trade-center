import { createTheme } from '@mui/material';

const CustomizeTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d9',
      contrastText: '#fff',
    },
    secondary: {
      main: '#818181',
      contrastText: '#fff',
    },
    info: {
      main: '#AFB3FF',
      contrastText: '#fff',
    },
  },
  components: {},
});

export default CustomizeTheme;
