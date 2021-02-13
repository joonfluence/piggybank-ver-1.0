import React from "react";
import styled from "styled-components";
import Header from "../../../Header";
import Nav from "../../../Nav";
import ContentHeader from "../../../ContentHeader";
import ContentBody from "../../../ContentBody";

const PayingMonthBlock = styled.div`
  background-color: white;
  height: 80vh;
`;

// 기본적으로 Header랑 NavBar는 공통적으로 들어가야 할 요소임. 또한 Container에 들어갈 요소 역시도 기존과 동일하게 작업해줘야 한다.

const PayingMonth = () => {
  return (
    <>
      <Nav></Nav>
      <Header HeaderInfo="월 지출"></Header>
      <PayingMonthBlock>
        <ContentHeader></ContentHeader>
        <ContentBody></ContentBody>
      </PayingMonthBlock>
    </>
  );
};

export default PayingMonth;
