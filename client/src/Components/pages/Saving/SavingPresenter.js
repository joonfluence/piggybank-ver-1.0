import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SavingPresenterBlock = styled.div`
  background-color: white;
`;

const SavingPresenter = ({
  date,
  title,
  price,
  memo,
  category,
  InfoName,
  children,
}) => {
  return (
    <>
      <SavingPresenterBlock>
        {children}
        {date}
        {title}
        {price}
        {memo}
        {category}
        {InfoName}
      </SavingPresenterBlock>
    </>
  );
};

SavingPresenter.propTypes = {
  date: PropTypes.instanceOf(Date),
  title: PropTypes.string.isRequired,
  price: PropTypes.number,
  memo: PropTypes.string,
  category: PropTypes.string.isRequired,
  InfoName: PropTypes.string,
};

export default SavingPresenter;
