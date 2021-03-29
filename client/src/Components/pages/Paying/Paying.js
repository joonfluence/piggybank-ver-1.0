import React, { useEffect } from "react";
import styled from "styled-components";
import Auth from "../../../hoc/auth";
import { useSelector, useDispatch } from "react-redux";
import CenterButton from "../../CenterButton";
import Header from "../../Header";
import { Helmet } from "react-helmet";
import Footer from "../../Footer";
import CreateBoard from "../../CreateBoard";
import CreateList from "../../CreateList";
import { readPaying } from "../../../redux/actions/payingActions";
import theme from "../../../Style/theme";

const PayingBlock = styled.div`
  .content {
    background-color: ${(props) => props.theme.color.white};
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
      <div>
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
      </div>
      <Footer />
    </PayingBlock>
  );
};

export default Auth(Paying, true);
