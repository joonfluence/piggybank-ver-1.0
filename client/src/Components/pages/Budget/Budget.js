import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import Footer from "../../Footer";
import styled from "styled-components";
import { monthBudget } from "../../../redux/actions/budgetActions";
import CenterButton from "../../common/CenterButton";
import Header from "../../Header";
import ContentBody from "../../ContentBody";
import ContentHeader from "../../ContentHeader";
import Auth from "../../../hoc/auth";
import CreateBoard from "../../CreateBoard";

const BudgetBlock = styled.div`
  .content {
    margin: 0 auto;
    display: flex;
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
          {payingSum === 0 && budgetSum === 0 ? (
            <>empty</>
          ) : (
            <ContentHeader
              yearInfo={yearInfo}
              monthInfo={monthInfo}
              used={payingSum}
              remained={pocketMoney}
              isBudget={true}
              budgetSum={budgetSum}
            ></ContentHeader>
          )}
          {monthlyBudget !== null ? (
            <ContentBody
              budgetSum={budgetSum}
              monthlyData={monthlyBudget}
              used={payingSum}
              remained={pocketMoney}
              isBudget={true}
              isCategory={false}
            ></ContentBody>
          ) : (
            <>empty</>
          )}
        </div>
      </main>
      <Footer />
    </BudgetBlock>
  );
};

export default Auth(Budget, true);
