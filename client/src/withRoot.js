import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3F51B5",
      dark: "#3A4BA7",
      contrastText: "#FFF",
    },
    secondary: {
      light: "#FF4081",
      main: "#FFF",
    },
  },
});

function withRoot(Component) {
  function WithRoot(props) {
    return(
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  };

  return WithRoot;
};

export default withRoot;
