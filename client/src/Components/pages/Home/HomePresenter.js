import React from "react";
import styled from "styled-components";
import { COLORS } from "../../GlobalStyles";
const HomePresenterBlock = styled.div`
  background-color: ${(props) => props.color};
  height: 15vh;
`;

const HomePresenter = () => {
  return (
    <>
      <HomePresenterBlock color={COLORS.white}></HomePresenterBlock>
    </>
  );
};

export default HomePresenter;
