import React from "react";
import GlobalStyles from "./GlobalStyles";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import theme from "../Style/theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};
export default App;
