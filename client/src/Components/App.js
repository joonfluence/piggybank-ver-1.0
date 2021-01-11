import { Component } from "react";
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
    const [ data ] = this.state;
    return (
      <>
        <title>{data}</title>
        <Nav />
        <Router />
      </>
    );
  }
}

export default App;