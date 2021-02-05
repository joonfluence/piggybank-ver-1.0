import React from "react";
import styled from "styled-components";
// import PropTypes from "prop-types";
import Header from "../../Header";
import CreateTemplate from "../../CreateTemplate";
import UserInfo from "../../UserInfo";

const HomePresenterBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomePresenter = () => {
  return (
    <>
      <Header />
      <HomePresenterBlock>
        <CreateTemplate></CreateTemplate>
      </HomePresenterBlock>
      <UserInfo></UserInfo>
    </>
  );
};

export default HomePresenter;
