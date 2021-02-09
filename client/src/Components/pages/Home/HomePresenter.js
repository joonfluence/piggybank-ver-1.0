import React from "react";
import styled from "styled-components";
// import PropTypes from "prop-types";
import Header from "../../Header";
import CreateTemplate from "../../CreateTemplate";

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
    </>
  );
};

export default HomePresenter;
