import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CenterButton from "../../CenterButton.js";
import FormBoard from "../../FormBoard";

const BudgetPresenterBlock = styled.div`
  background-color: white;
`;

const BudgetPresenter = ({ children }) => {
  // const dispatch = useDispatch();
  return (
    <BudgetPresenterBlock>
      <CenterButton />
      <FormBoard />
    </BudgetPresenterBlock>
  );
};

export default BudgetPresenter;
