import { Component } from "react";
import GlobalStyles from "./GlobalStyles";
import axios from "axios";
import Router from "./Router";

class App extends Component {
  render(){
    return (
      <>
        <Router />
        <GlobalStyles />
      </>
    );
  }
}

export default App;