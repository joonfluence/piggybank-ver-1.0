import React from "react";
import styled from "styled-components";

const MainBoardBlock = styled.section`
  padding-top: 50px;
  height: 300px;
  background-color: darkgreen;
`;

const MainBoard = () => {
  return (
    <MainBoardBlock>
      <h1>유저의 달성률 정보입니다</h1>
    </MainBoardBlock>
  );
};

export default MainBoard;
