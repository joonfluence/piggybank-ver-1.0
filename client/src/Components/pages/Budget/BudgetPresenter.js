import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const BudgetPresenterBlock = styled.div`
  background-color: white;
`;

const BudgetPresenter = ({ children, date, title, price, memo }) => {
  return (
    <BudgetPresenterBlock>
      {children}
      {date}
      {title}
      {price}
      {memo}
    </BudgetPresenterBlock>
  );
};

// date, title, price, memo
// BudgetPresenter.propTypes = {
//   date: PropTypes.instanceOf(Date),
//   title: PropTypes.string.isRequired,
//   price: PropTypes.number,
//   memo: PropTypes.string,
// };

export default BudgetPresenter;
