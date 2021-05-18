import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import Footer from "../../common/Footer";
import styled from "styled-components";
import { monthBudget } from "../../../redux/actions/budgetActions";
import CenterButton from "../../common/CenterButton";
import Header from "../../common/Header";
import ContentBody from "../../common/ContentBody";
import ContentHeader from "../../common/ContentHeader";
import Auth from "../../../hoc/auth";
import CreateBoard from "../../common/CreateBoard";
import DateModal from "../../utils/DateModal";

const BudgetBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  .content {
    margin: 0 auto;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.color.white};
  }
`;

const Budget = () => {
  const dispatch = useDispatch();

  const { yearInfo, monthInfo } = useSelector(({ dateReducer }) => ({
    yearInfo: dateReducer.yearInfo,
    monthInfo: dateReducer.monthInfo,
  }));

  const { budgetSum, monthlyBudget, payingSum } = useSelector(
    ({ budgetReducer }) => ({
      budgetSum: budgetReducer.budgetSum,
      monthlyBudget: budgetReducer.monthlyBudget,
      payingSum: budgetReducer.categorySum,
    })
  );

  useEffect(() => {
    let body = {
      year: yearInfo,
      month: monthInfo,
    };
    async function fetchPageData() {
      await dispatch(monthBudget(body));
    }
    fetchPageData();
  }, [yearInfo, monthInfo]);

  const pocketMoney = budgetSum - payingSum;

  return (
    <BudgetBlock>
      <Helmet>
        <title>이번달 소비관리 | 돼지저금통</title>
      </Helmet>
      <Header />
      <CenterButton />
      <main className="content">
        <CreateBoard isBudget={true} InfoName="예산" />
        <div>
          <DateModal yearInfo={yearInfo} monthInfo={monthInfo} />
        </div>
        <ContentHeader
          yearInfo={yearInfo}
          monthInfo={monthInfo}
          used={payingSum}
          remained={pocketMoney}
          isBudget={true}
          budgetSum={budgetSum}
        ></ContentHeader>
        <ContentBody
          budgetSum={budgetSum}
          monthlyData={monthlyBudget}
          used={payingSum}
          remained={pocketMoney}
          isBudget={true}
          isCategory={false}
        ></ContentBody>
      </main>
      <Footer />
    </BudgetBlock>
  );
};

export default Auth(Budget, true);
