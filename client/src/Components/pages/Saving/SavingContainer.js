import React from "react";
import styled from "styled-components";
import Header from "../../Header";
import SavingPresenter from "./SavingPresenter";
import CenterButton from "../../CenterButton";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import Footer from "../../Footer";

const SavingContainerBlock = styled.div``;

const SavingContainer = () => {
  const { savingList } = useSelector(({ savingReducer }) => ({
    savingList: savingReducer.savingList,
  }));
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>저축관리 | 돼지저금통</title>
      </Helmet>
      <SavingContainerBlock>
        <Header HeaderInfo="저축" />
        <CenterButton />
        <SavingPresenter dataList={savingList} />
      </SavingContainerBlock>
      <Footer />
    </>
  );
};

export default SavingContainer;
