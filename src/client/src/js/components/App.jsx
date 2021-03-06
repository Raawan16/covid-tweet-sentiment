/*
COMP90024
Team 11
Marco Marasco - 834882
Austen McClernon - 834063
Sam Mei - 1105817
Cameron Wong - 1117840
*/

import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Main from "./Main";
import ReactGA from "react-ga";


function initializeReactGA() {
  ReactGA.initialize('UA-167432602-1');
  ReactGA.pageview('/homepage');
}


const THEME = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: "column",
    minHeight: "100vh",
    display: "flex",
  },
  main: {
    marginBottom: theme.spacing(4),
  },
  footer: {
    padding: theme.spacing(4),
    marginTop: "auto",
  },
  header: {
    maxHeight: "100px",
  },
  phantom: {
    display: "flex",
    flex: 1,
    flexGrow: 1,
  },
}));

const App = () => {
  const classes = useStyles();

  useEffect(() => {
    initializeReactGA();
  })

  return (
    <div className={classes.root}>
      {/* <MuiThemeProvider theme={THEME}> */}
      <CssBaseline />
      <NavBar />
      <Main className={classes.main} />
      <div className={classes.phantom} />
      <Footer className={classes.footer} />
      {/* </MuiThemeProvider> */}
    </div>
  );
};

export default App;
