import React from "react";
import styled from "styled-components";
import Header from "../../Header";
import PayingPresenter from "./PayingPresenter";
import CenterButton from "../../CenterButton";
import Auth from "../../../hoc/auth";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import Footer from "../../Footer";

const PayingContainerBlock = styled.div``;

const PavingContainer = () => {
  const { payingList } = useSelector(({ payingReducer }) => ({
    payingList: payingReducer.payingList,
  }));

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>지출관리 | 돼지저금통</title>
      </Helmet>
      <PayingContainerBlock>
        <Header HeaderInfo="지출"></Header>
        <CenterButton />
        <PayingPresenter dataList={payingList}></PayingPresenter>
      </PayingContainerBlock>
      <Footer />
    </>
  );
};

export default Auth(PavingContainer, true);
