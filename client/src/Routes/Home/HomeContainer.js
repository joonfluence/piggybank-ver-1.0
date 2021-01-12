import React from "react";
import HomePresenter from "./HomePresenter";
import { Api } from "../../api"

export default class extends React.Component {
    constructor(props){
        super(props);
        this.state = { data : "" };
      }
    
      componentDidMount = async() => {
        const test = await Api.getPayingInfo();
        this.setState(test);
      }
      render(){
        const { data } = this.state;
        return (
            <HomePresenter data={data}></HomePresenter>
        )
    }
}