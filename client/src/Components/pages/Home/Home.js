import React from "react";
import styled from "styled-components";
import Header from "../../common/Header";
import CenterButton from "../../common/CenterButton";
import { Helmet } from "react-helmet";
import Footer from "../../common/Footer";
import { useSelector } from "react-redux";
import LoginRequired from "../../utils/LoginRequired";
import Auth from "../../../hoc/auth";

const HomeBlock = styled.div`
  height: 100vh;
  .main-content {
    background-color: ${(props) => props.theme.color.white};
    height: 51vh;
  }
`;

const Home = () => {
  const { isAuth } = useSelector(({ userReducer }) => ({
    isAuth: userReducer.isAuth,
  }));

  return (
    <HomeBlock>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | 돼지저금통</title>
      </Helmet>
      <Header />
      <CenterButton />
      <div className="main-content" isAuth={isAuth}></div>
      <Footer />
    </HomeBlock>
  );
};

export default Auth(Home, null);
