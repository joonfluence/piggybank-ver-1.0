import { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
      message: ""
      // name : "",
      // price : "",
      // location : ""
  }
  
  async componentDidMount(){
    const user = await axios.get("api/hello");
    const { data : { message} } = user;
    console.log(message);
    this.setState({ message });
  }
  
  render(){
    const { message } = this.state;
    return (
      <div className="App">
        <h1>{message}</h1>
        <p>Hello</p>
      </div>
    );
  }
}

export default App;
