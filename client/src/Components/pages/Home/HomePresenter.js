import React from "react";
import styled from "styled-components";

const HomePresenterBlock = styled.div`
  background-color: ${(props) => props.theme.color.white};
  height: 15vh;
`;

const HomePresenter = () => {
  return (
    <>
      <HomePresenterBlock></HomePresenterBlock>
    </>
  );
};

export default HomePresenter;
