import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SavingGoalPresenterBlock = styled.div`
  background-color: white;
`;

const SavingGoalPresenter = ({
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
      <SavingGoalPresenterBlock>{children}</SavingGoalPresenterBlock>
    </>
  );
};

SavingGoalPresenter.propTypes = {
  date: PropTypes.instanceOf(Date),
  title: PropTypes.string.isRequired,
  price: PropTypes.number,
  priceSum: PropTypes.number,
  pricePercentage: PropTypes.number,
  memo: PropTypes.string,
  category: PropTypes.string.isRequired,
  InfoName: PropTypes.string,
};

export default SavingGoalPresenter;
