import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiPiggyBank, GiTakeMyMoney } from "react-icons/gi";
import { AiFillAccountBook } from "react-icons/ai";
import { BsQuestionSquare } from "react-icons/bs";
import routes from "../routes";
import { COLORS } from "./GlobalStyles";

const ButtonBlock = styled.div`
  position: relative;
  height: 6vh;
  z-index: 2;
  display: flex;
  width: 100%;
  margin: 0 auto;
  font-family: "Oswald", sans-serif;
`;

const ButtonList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1;
  background-color: ${(props) => props.color};
  box-shadow: 0px 0px 3px 1px ${(props) => props.borderColor};
`;

const ButtonElementsList = styled.li`
  font-size: 1.3rem;
  padding: 0.5rem;
  margin: 1rem;
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

  & > li {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const CenterButton = () => {
  return (
    <ButtonBlock>
      <ButtonList color={COLORS.grey} borderColor={COLORS.white}>
        <ButtonElementsList>
          <Link to={"/introduction"}>
            <BsQuestionSquare />
            <div>How to use</div>
          </Link>
        </ButtonElementsList>
        <ButtonElementsList>
          <AiFillAccountBook />
          <span>이번달 목표 정하기</span>
          <HiddenBlock color={COLORS.grey}>
            {/* <li>
              <Link to={routes.payingMonth}>총 지출내역</Link>
            </li>
            <li>
              <Link to={routes.savingMonth}>총 저축내역</Link>
            </li> */}
            <li>
              <Link to={routes.budgetMonth}>지출 목표 & 달성도</Link>
            </li>
            <li>
              <Link to={routes.savingGoalMonth}>저축 목표 & 달성도</Link>
            </li>
          </HiddenBlock>
        </ButtonElementsList>
        <ButtonElementsList>
          <AiFillAccountBook />
          <span>가계부 쓰기</span>
          <HiddenBlock color={COLORS.grey}>
            <li>
              <Link to={routes.paying}>
                <GiTakeMyMoney />
                소비내역
              </Link>
            </li>
            <li>
              <Link to={routes.saving}>
                <GiPiggyBank />
                저축내역
              </Link>
            </li>
            {/* <li>
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
            </li> */}
          </HiddenBlock>
        </ButtonElementsList>
      </ButtonList>
    </ButtonBlock>
  );
};

export default CenterButton;
