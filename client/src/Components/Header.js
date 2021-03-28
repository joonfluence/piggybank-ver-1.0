import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/header_img.png";

const HeaderBlock = styled.header`
  background-color: white;
  box-shadow: 0px 2px 5px 1px white;
  height: 20vh;
  padding: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderImage = styled.img`
  width: 200px;
  height: 200px;
`;

const Header = () => {
  return (
    <HeaderBlock>
      <Link to="/">
        <HeaderImage src={logo}></HeaderImage>
      </Link>
    </HeaderBlock>
  );
};

export default Header;
