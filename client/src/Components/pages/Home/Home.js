import React from "react";
import styled from "styled-components";
import Header from "../../common/Header";
import CenterButton from "../../common/CenterButton";
import { Helmet } from "react-helmet";
import Footer from "../../common/Footer";
import { useSelector } from "react-redux";
import LoginRequired from "../../utils/LoginRequired";
import Auth from "../../../Hoc/auth";

const HomeBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  .main__container {
    background-color: ${(props) => props.theme.color.white};
    flex: 1;
    display: flex;
    flex-direction: column;

    .main__content {
      flex: 1;
      overflow: auto;
    }
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
      <div className="main__container" isAuth={isAuth}>
        <main className="main__content"></main>
      </div>
      <Footer />
    </HomeBlock>
  );
};

export default Auth(Home, null);
