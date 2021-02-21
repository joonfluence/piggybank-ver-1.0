import React from "react";
import styled from "styled-components";

const HeaderBlock = styled.div`
  background-color: white;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderTitle = styled.h1``;

const HeaderImage = styled.img`
  width: 200px;
  height: 200px;
`;

const Header = ({ HeaderInfo }) => {
  return (
    <>
      <HeaderBlock>
        <HeaderTitle>당신의 {HeaderInfo}을 좀 더 쉽게 관리하세요</HeaderTitle>
        <HeaderImage src="http://127.0.0.1:8887/piggybank_illustration-removebg.png"></HeaderImage>
      </HeaderBlock>
    </>
  );
};

export default Header;
