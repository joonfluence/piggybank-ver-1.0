import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const PayingPresenterBlock = styled.div`
  background-color: white;
`;

const PayingPresenter = ({ date, title, price, memo, category, InfoName }) => {
  return (
    <>
      <PayingPresenterBlock>
        {date} {title} {price} {memo} {category} {InfoName}
      </PayingPresenterBlock>
    </>
  );
};

PayingPresenter.propTypes = {
  date: PropTypes.instanceOf(Date),
  title: PropTypes.string.isRequired,
  price: PropTypes.number,
  memo: PropTypes.string,
  category: PropTypes.string.isRequired,
  InfoName: PropTypes.string,
};

export default PayingPresenter;
