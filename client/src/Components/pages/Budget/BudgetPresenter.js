import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { monthBudget } from "../../../actions/budget_actions.js";
import CenterButton from "../../CenterButton.js";

const BudgetPresenterBlock = styled.div`
  background-color: white;
`;

const BudgetPresenter = ({ children, date, title, price, memo }) => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(monthBudget(["2021", "02"]));
  // });

  return (
    <BudgetPresenterBlock>
      <CenterButton />
      {children}
      {/* 
      {date}
      {title}
      {price}
      {memo} */}
    </BudgetPresenterBlock>
  );
};

BudgetPresenter.propTypes = {
  date: PropTypes.instanceOf(Date),
  title: PropTypes.string.isRequired,
  price: PropTypes.number,
  memo: PropTypes.string,
};

export default BudgetPresenter;
