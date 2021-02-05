import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiPiggyBank, GiTakeMyMoney, GiStairsGoal } from "react-icons/gi";
import { AiFillAccountBook } from "react-icons/ai";

const HeaderBlock = styled.div`
  background-color: white;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderTitle = styled.h1``;

const HeaderImage = styled.div`
  /* 오류발생 */
  background-image: url("../images/piggybank_illustration-removebg.png");
  width: 100px;
  height: 100px;
`;

const ButtonBlock = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
`;

const ButtonList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1;
  background-color: #5956e9;
`;

const ButtonElements = styled.li`
  a {
    display: flex;
    align-items: center;
  }
  font-size: 1.3rem;
  padding: 0.5rem;
`;

const SLink = styled(Link)``;

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <HeaderTitle>당신의 지출을 좀 더 쉽게 관리하세요</HeaderTitle>
        <HeaderImage></HeaderImage>
      </HeaderBlock>
      <ButtonBlock>
        <ButtonList>
          <ButtonElements>
            <SLink to="/budgets">
              <AiFillAccountBook />
              Budget
            </SLink>
          </ButtonElements>
          <ButtonElements>
            <SLink to="/payings">
              <GiTakeMyMoney />
              Payings
            </SLink>
          </ButtonElements>
          <ButtonElements>
            <SLink to="/savingGoal">
              <GiStairsGoal />
              Saving Goal
            </SLink>
          </ButtonElements>
          <ButtonElements>
            <SLink to="/savings">
              <GiPiggyBank />
              Savings
            </SLink>
          </ButtonElements>
        </ButtonList>
      </ButtonBlock>
    </>
  );
};

export default Header;
