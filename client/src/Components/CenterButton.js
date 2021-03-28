import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiPiggyBank, GiTakeMyMoney } from "react-icons/gi";
import { AiFillAccountBook } from "react-icons/ai";
import { BsQuestionSquare } from "react-icons/bs";
import routes from "../routes";

const ButtonBlock = styled.div`
  position: relative;
  height: 6vh;
  z-index: 2;
  display: flex;
  width: 100%;
  margin: 0 auto;
  font-family: "Oswald", sans-serif;

  .btn-menu {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex: 1;
    background-color: ${(props) => props.theme.color.grey};
    box-shadow: 0px 0px 3px 1px ${(props) => props.theme.color.white};

    .btn-list {
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
    }
  }

  .popup-list {
    visibility: hidden;
    position: absolute;
    background-color: ${(props) => props.theme.color.grey};
    text-align: center;

    & > li {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`;

const CenterButton = () => {
  return (
    <ButtonBlock>
      <ul className="btn-menu">
        <li className="btn-list">
          <Link to={"/introduction"}>
            <BsQuestionSquare />
            <div>How to use</div>
          </Link>
        </li>
        <li className="btn-list">
          <AiFillAccountBook />
          <span>이번달 목표 정하기</span>
          <ul className="popup-list">
            <li>
              <Link to={routes.budget}>지출 목표 & 달성도</Link>
            </li>
            <li>
              <Link to={routes.savingGoal}>저축 목표 & 달성도</Link>
            </li>
          </ul>
        </li>
        <li className="btn-list">
          <AiFillAccountBook />
          <span>가계부 쓰기</span>
          <ul className="popup-list">
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
          </ul>
        </li>
      </ul>
    </ButtonBlock>
  );
};

export default CenterButton;
