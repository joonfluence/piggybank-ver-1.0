import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiPiggyBank, GiTakeMyMoney } from "react-icons/gi";
import { AiFillAccountBook, AiOutlineBook } from "react-icons/ai";
import { BsQuestionSquare } from "react-icons/bs";
import routes from "../../routes";
import { GiStairsGoal } from "react-icons/gi";

const ButtonBlock = styled.section`
  position: relative;
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
      @media (max-width: 530px) {
        font-size: 1rem;
      }

      .btn-content {
        padding: 0.5rem;
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

    @media (max-width: 768px) {
      font-size: 1rem;
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
            <span className="btn-content"> How to use</span>
          </Link>
        </li>
        <li className="btn-list">
          <AiFillAccountBook />
          <span className="btn-content">Setting goal</span>
          <ul className="popup-list">
            {" "}
            <li>
              <Link to={routes.budget}>
                <AiOutlineBook />
                Budget
              </Link>
            </li>
            <li>
              <Link to={routes.savingGoal}>
                <GiStairsGoal />
                Saving goal
              </Link>
            </li>
          </ul>
        </li>
        <li className="btn-list">
          <AiFillAccountBook />
          <span className="btn-content">Writting book</span>
          <ul className="popup-list">
            <li>
              <Link to={routes.paying}>
                <GiTakeMyMoney />
                Consumption list
              </Link>
            </li>
            <li>
              <Link to={routes.saving}>
                <GiPiggyBank />
                Saving list
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </ButtonBlock>
  );
};

export default CenterButton;
