import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../Images/header_img.png";

const HeaderBlock = styled.header`
  background-color: white;
  box-shadow: 0px 2px 5px 1px white;
  padding-top: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .header__image {
    width: 200px;
    height: 200px;
  }
`;

const Header = () => {
  return (
    <HeaderBlock>
      <Link to="/">
        <img className="header__image" alt="piggybank logo" src={logo} />
      </Link>
    </HeaderBlock>
  );
};

export default Header;
