import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const BudgetPresenterBlock = styled.div`
  background-color: white;
`;

const BudgetPresenter = ({
  date,
  title,
  price,
  priceSum,
  pricePercentage,
  memo,
  category,
  children,
}) => {
  return (
    <>
      <BudgetPresenterBlock>{children}</BudgetPresenterBlock>
    </>
  );
};

BudgetPresenter.propTypes = {
  date: PropTypes.instanceOf(Date),
  title: PropTypes.string.isRequired,
  price: PropTypes.number,
  priceSum: PropTypes.number,
  pricePercentage: PropTypes.number,
  memo: PropTypes.string,
  category: PropTypes.string.isRequired,
  InfoName: PropTypes.string,
};

export default BudgetPresenter;
