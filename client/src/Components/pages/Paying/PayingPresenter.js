import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ContentBoard from "../../ContentBoard";
import ContentHeader from "../../ContentHeader";

const PayingPresenterBlock = styled.div`
  background-color: white;
`;

const PayingPresenter = ({ date, title, price, memo, category, InfoName }) => {
  return (
    <>
      <PayingPresenterBlock>
        <ContentHeader></ContentHeader>
        <ContentBoard
          date={""}
          title={""}
          price={""}
          memo={""}
          category={""}
          InfoName={InfoName}
        ></ContentBoard>
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
