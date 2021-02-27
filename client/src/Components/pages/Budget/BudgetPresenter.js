import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { monthBudget } from "../../../actions/budgetActions.js";
import CenterButton from "../../CenterButton.js";

const BudgetPresenterBlock = styled.div`
  background-color: white;
`;

const BudgetPresenter = ({ children, date, title, price, memo }) => {
  // const dispatch = useDispatch();
  return (
    <BudgetPresenterBlock>
      <CenterButton />
      {children}
      {date}
      {title}
      {price}
      {memo}
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
