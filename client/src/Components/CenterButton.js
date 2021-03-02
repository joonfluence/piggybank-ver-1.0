import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiPiggyBank, GiTakeMyMoney, GiStairsGoal } from "react-icons/gi";
import { AiFillAccountBook } from "react-icons/ai";
import routes from "../routes";

const ButtonBlock = styled.div`
  position: relative;
  z-index: 2;
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

const ButtonElementsList = styled.li`
  font-size: 1.3rem;
  padding: 0.5rem;
  a {
    display: flex;
    align-items: center;
  }
  &:hover {
    ul {
      visibility: visible;
      display: block;
    }
  }
`;

const SLink = styled(Link)``;

const HiddenBlock = styled.ul`
  visibility: hidden;
  position: absolute;
  background-color: #5956e9;
  width: 10%;
  text-align: center;
`;

const HiddenLink = styled(Link)`
  font-size: 1.5rem;
`;

const CenterButton = () => {
  return (
    <ButtonBlock>
      <ButtonList>
        <ButtonElementsList>
          <SLink to="/budgets">
            <AiFillAccountBook />
            Budget
          </SLink>
          <HiddenBlock>
            <li>
              <HiddenLink to={routes.budgetMonth}>Month Data</HiddenLink>
            </li>
          </HiddenBlock>
        </ButtonElementsList>
        <ButtonElementsList>
          <SLink to="/payings">
            <GiTakeMyMoney />
            Payings
          </SLink>
          <HiddenBlock>
            <li>
              <HiddenLink to={routes.payingMonth}>Month Data</HiddenLink>
            </li>
          </HiddenBlock>
        </ButtonElementsList>
        <ButtonElementsList>
          <SLink to="/savingsGoal">
            <GiStairsGoal />
            Saving Goal
          </SLink>
          <HiddenBlock>
            <li>
              <HiddenLink to={routes.savingGoalMonth}>Month Data</HiddenLink>
            </li>
          </HiddenBlock>
        </ButtonElementsList>
        <ButtonElementsList>
          <SLink to="/savings">
            <GiPiggyBank />
            Savings
          </SLink>
          <HiddenBlock>
            <li>
              <HiddenLink to={routes.savingMonth}>Month Data</HiddenLink>
            </li>
          </HiddenBlock>
        </ButtonElementsList>
      </ButtonList>
    </ButtonBlock>
  );
};

export default CenterButton;
