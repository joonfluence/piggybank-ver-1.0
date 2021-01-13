import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import InputBoard from "../../Components/InputBoard";
import MainBoard from "../../Components/MainBoard";

class HomePresenter extends React.Component {
    render() {
        return (
            <>
                <MainBoard></MainBoard>
                <InputBoard></InputBoard>
            </>
        )
    }
}

export default HomePresenter;