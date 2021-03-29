import React from "react";
import styled from "styled-components";
import Header from "../../Header";
import CenterButton from "../../CenterButton";
import { Helmet } from "react-helmet";
import Footer from "../../Footer";
import { useSelector } from "react-redux";
import LoginRequired from "../../common/LoginRequired";
import Auth from "../../../hoc/auth";

const HomeBlock = styled.div`
  height: 100vh;
  .main-content {
    background-color: ${(props) => props.theme.color.white};
    height: 53vh;
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
      <Header HeaderInfo="자산" />
      <CenterButton />
      {isAuth ? (
        <div className="main-content" isAuth={isAuth}></div>
      ) : (
        <LoginRequired />
      )}
      <Footer />
    </HomeBlock>
  );
};

export default Auth(Home, null);
