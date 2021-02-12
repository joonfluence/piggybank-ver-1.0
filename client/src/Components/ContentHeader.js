import React, { useEffect } from "react";
import styled from "styled-components";
import PieTotalRatio from "./visuals/PieTotalRatio";
import { useDispatch, useSelector } from "react-redux";
import { monthBudget } from "../actions/budget_actions";

const ContentHeaderBlock = styled.div``;
const ContentTitle = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  background-color: #eaf6ff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 2rem;
  height: 15vh;
  width: 80%;
`;

const ContentInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImageCircle = styled.div`
  position: absolute;
  left: 60%;
  top: 30%;
  width: 300px;
  height: 300px;
`;

const ContentHeader = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(monthBudget(["2021", "02"]));
  });

  const { budgetSum } = useSelector(({ budgetReducer }) => ({
    budgetSum: budgetReducer.budgetSum,
  }));

  const { monthlyPaying } = useSelector(({ payingReducer }) => ({
    payingSum: payingReducer.payingSum,
  }));

  const data = [
    {
      id: "총 소비액수",
      value: { monthlyPaying }, // 전체 소비액
      color: "hsl(181, 70%, 50%)", // 카테고리 색상
    },
    {
      id: "남은 예산",
      value: { budgetSum } - { monthlyPaying },
      color: "hsl(236, 70%, 50%)",
    },
  ];

  let month = new Date().getMonth() + 1;

  return (
    <ContentHeaderBlock>
      <ContentTitle>
        <Content>
          <ContentInfo>
            <h1> {month.toString()} 월</h1>
            <h2>남은 예산</h2>
            <h3>
              {" "}
              {budgetSum} - {monthlyPaying} 원{" "}
            </h3>
          </ContentInfo>
          <ImageCircle>
            <PieTotalRatio data={data}></PieTotalRatio>
          </ImageCircle>
        </Content>
      </ContentTitle>
    </ContentHeaderBlock>
  );
};

export default ContentHeader;
