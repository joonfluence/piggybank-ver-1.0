import React from "react";
import styled from "styled-components";
import Header from "../../Header";
import PayingPresenter from "./PayingPresenter";
import CenterButton from "../../CenterButton";

import { useSelector } from "react-redux";

const PayingContainerBlock = styled.div``;

const PavingContainer = () => {
  const { payingList } = useSelector(({ payingReducer }) => ({
    payingList: payingReducer.payingList,
  }));

  const { user } = useSelector(({ userReducer }) => ({
    user: userReducer.user,
  }));

  return (
    <PayingContainerBlock>
      <Header HeaderInfo="지출"></Header>
      <CenterButton />
      <PayingPresenter userInfo={user} dataList={payingList}></PayingPresenter>
    </PayingContainerBlock>
  );
};

export default PavingContainer;
