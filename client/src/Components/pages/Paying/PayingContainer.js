import React from "react";
import styled from "styled-components";
import Header from "../../Header";
import PayingPresenter from "./PayingPresenter";
import CenterButton from "../../CenterButton";
import { useSelector } from "react-redux";
import Auth from "../../../hoc/auth";

const PayingContainerBlock = styled.div``;

const PavingContainer = () => {
  const { user } = useSelector(({ userReducer }) => ({
    user: userReducer.user,
  }));

  const { payingList } = useSelector(({ payingReducer }) => ({
    payingList: payingReducer.payingList,
  }));

  return (
    <PayingContainerBlock>
      <Header HeaderInfo="지출"></Header>
      <CenterButton />
      <PayingPresenter userInfo={user} dataList={payingList}></PayingPresenter>
    </PayingContainerBlock>
  );
};

export default Auth(PavingContainer, true);
