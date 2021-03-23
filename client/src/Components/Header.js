import React from "react";
import styled from "styled-components";
import logo from "../images/piggybank_illustration-removebg.png";

const HeaderBlock = styled.header`
  background-color: white;
  box-shadow: 0px 2px 5px 1px white;
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
        <HeaderImage src={logo}></HeaderImage>
      </HeaderBlock>
    </>
  );
};

export default Header;
