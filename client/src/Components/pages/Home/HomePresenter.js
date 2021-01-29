import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import InputBoard from "../../InputBoard";
import MainBoard from "../../MainBoard";
import UserInfo from "../../UserInfo";

const HomePresenterBlock = styled.div``;

const HomePresenter = () => {
  return (
    <HomePresenterBlock>
      <MainBoard></MainBoard>
      <InputBoard></InputBoard>
      <UserInfo></UserInfo>
    </HomePresenterBlock>
  );
};

export default HomePresenter;
