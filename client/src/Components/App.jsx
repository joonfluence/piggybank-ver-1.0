import React from "react";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import theme from "../Style/theme";
import GlobalStyles from "../Style/GlobalStyles";

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
