import { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
      message : ""
  }
  
  async componentDidMount(){
    const user = await axios.get("/api/hello");
    const { data : { message} } = user;
    console.log(message);
    this.setState({ message });
  }
  
  render(){
    const { message } = this.state;
    return (
      <div className="App">
        <h1>{message}</h1>
      </div>
    );
  }
}

export default App;
