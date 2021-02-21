import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CenterButton from "../../CenterButton";

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
        <CenterButton />
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
