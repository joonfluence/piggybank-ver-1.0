import { Component } from "react";
import GlobalStyles from "./GlobalStyles";
import axios from "axios";
import Router from "./Router";
import Nav from "./Nav";

class App extends Component {
  constructor(props){
    super(props);
    this.state = { data : "" };
  }

  componentDidMount = async() => {
    const money = await axios.get("/api/");
    console.log(money.data);
    this.setState({ data : money.data });
  }

  render(){
    return (
      <>
        <Router />
        <GlobalStyles />
        <h1>Hi!</h1>
      </>
    );
  }
}

export default App;