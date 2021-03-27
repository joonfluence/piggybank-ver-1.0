import React from "react";
import Header from "../../Header";
import CenterButton from "../../CenterButton";
import HomePresenter from "./HomePresenter";
import Auth from "../../../hoc/auth";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { COLORS } from "../../GlobalStyles";
import Footer from "../../Footer";

const LoginRequired = styled.div`
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: red;
  height: 15vh;
`;

const HomeContainer = () => {
  const { isAuth } = useSelector(({ userReducer }) => ({
    isAuth: userReducer.isAuth,
  }));
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | 돼지저금통</title>
      </Helmet>
      <Header HeaderInfo="자산" />
      <CenterButton />
      {isAuth ? <HomePresenter isAuth={isAuth}></HomePresenter> : <></>}
      <Footer />
    </>
  );
};

export default Auth(HomeContainer, null);
