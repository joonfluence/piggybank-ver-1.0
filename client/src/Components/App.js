import { Component } from "react";
import axios from "axios";
import Router from "./Router";
import Nav from "./Nav";

class App extends Component {
  
  componentDidMount = async() => {
    const money = await axios.get("/api/users");
    
  }
  render(){
    return (
      <>
        <Nav />
        <Router />
      </>
    );
  }
}

export default App;