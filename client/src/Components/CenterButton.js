import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiPiggyBank, GiTakeMyMoney } from "react-icons/gi";
import { AiFillAccountBook } from "react-icons/ai";
import routes from "../routes";
import { COLORS } from "./GlobalStyles";

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
  background-color: ${(props) => props.color};
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

const HiddenBlock = styled.ul`
  visibility: hidden;
  position: absolute;
  background-color: ${(props) => props.color};
  text-align: center;
`;

const CenterButton = () => {
  return (
    <ButtonBlock>
      <ButtonList color={COLORS.navy}>
        <ButtonElementsList>
          <AiFillAccountBook />
          탐색하기
          <HiddenBlock color={COLORS.navy}>
            <li>
              <Link to={routes.paying}>총 지출내역</Link>
            </li>
            <li>
              <Link to={routes.saving}>총 저축내역</Link>
            </li>
            <li>
              <Link to={routes.budgetMonth}>이번달 지출내역</Link>
            </li>
            <li>
              <Link to={routes.savingGoalMonth}>이번달 저축내역</Link>
            </li>
          </HiddenBlock>
        </ButtonElementsList>
        <ButtonElementsList>
          <AiFillAccountBook />
          생성하기
          <HiddenBlock color={COLORS.navy}>
            <li>
              <Link to={routes.paying}>
                <GiTakeMyMoney />
                소비내역 작성하기
              </Link>
            </li>
            <li>
              <Link to={routes.saving}>
                <GiPiggyBank />
                저축내역 작성하기
              </Link>
            </li>
            <li>
              <Link to={routes.budget}>
                <AiFillAccountBook />
                예산목표 작성하기
              </Link>
            </li>
            <li>
              <Link to={routes.savingGoal}>
                <AiFillAccountBook />
                저축목표 작성하기
              </Link>
            </li>
          </HiddenBlock>
        </ButtonElementsList>
      </ButtonList>
    </ButtonBlock>
  );
};

export default CenterButton;
