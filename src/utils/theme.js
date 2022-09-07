import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        h6: {
          fontWeight: "600 !important"
        },
        body1: {
          fontSize: "16px !important"
        },
        body2: {
          fontSize: "14px !important"
        }
      }
    }
  }
});