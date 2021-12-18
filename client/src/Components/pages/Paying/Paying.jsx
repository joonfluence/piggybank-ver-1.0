import React, { useEffect } from "react";
import styled from "styled-components";
import Auth from "../../../hoc/auth";
import { useSelector, useDispatch } from "react-redux";
import CenterButton from "../../common/CenterButton";
import Header from "../../common/Header.jsx";
import { Helmet } from "react-helmet";
import Footer from "../../common/Footer";
import CreateBoard from "../../common/CreateBoard";
import CreateList from "../../common/CreateList";
import { readPaying } from "../../../redux/actions/payingActions";
import theme from "../../../Style/theme";

const PayingBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  .content {
    background-color: ${(props) => props.theme.color.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    align-items: center;
    margin-bottom: 3rem;
  }
`;

const Paying = () => {
  const { payingList } = useSelector(({ payingReducer }) => ({
    payingList: payingReducer.payingList,
  }));

  const { monthlyBudget } = useSelector(({ budgetReducer }) => ({
    monthlyBudget: budgetReducer.monthlyBudget,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readPaying());
  }, []);

  return (
    <PayingBlock>
      <Helmet>
        <meta charSet="utf-8" />
        <title>지출관리 | 돼지저금통</title>
      </Helmet>
      <Header />
      <CenterButton />
      <div className="content">
        <CreateBoard
          isPaying={true}
          InfoName="소비"
          selectOptions={monthlyBudget}
        />
        <CreateList
          color={theme.color.skyblue}
          isPaying={true}
          dataList={payingList}
          isCategory={true}
        />
      </div>
      <Footer />
    </PayingBlock>
  );
};

export default Auth(Paying, true);
