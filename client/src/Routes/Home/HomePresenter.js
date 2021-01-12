import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

class HomePresenter extends React.Component {
    render(){
        return(
            <div>
                <h1>{`data received : ${this.props.data}`}</h1>
            </div>
        )
    }
}

export default HomePresenter;