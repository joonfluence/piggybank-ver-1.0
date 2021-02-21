import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { GiPiggyBank, GiTakeMyMoney, GiStairsGoal } from "react-icons/gi";
import { AiFillAccountBook } from "react-icons/ai";


const ButtonBlock = styled.div`
  display: flex;
  width: 100%;
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


const CenterButton = () => {
    return (
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
            <SLink to="/savingsGoal">
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
    );
};

export default CenterButton;