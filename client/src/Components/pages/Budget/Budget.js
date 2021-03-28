import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import Footer from "../../Footer";
import styled from "styled-components";
import FormBoard from "../../FormBoard";
import { monthBudget } from "../../../redux/actions/budgetActions";
import { monthPaying } from "../../../redux/actions/payingActions";
import CenterButton from "../../CenterButton";
import Header from "../../Header";
import ContentBody from "../../ContentBody";
import ContentHeader from "../../ContentHeader";
import Auth from "../../../hoc/auth";

const BudgetBlock = styled.div`
  background-color: ${(props) => props.theme.color.white};
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
      await dispatch(monthPaying(body));
    }
    fetchPageData();
  }, [yearInfo, monthInfo]);

  const pocketMoney = budgetSum - payingSum;

  return (
    <BudgetBlock>
      <Helmet>
        <title>이번달 소비관리 | 돼지저금통</title>
      </Helmet>
      <div>
        <Header />
        <CenterButton />
        <div>
          <FormBoard
            isBudget={true}
            budgetInfo="식비"
            title="예산항목"
            yearInfo={yearInfo}
            monthInfo={monthInfo}
            mention={`${monthInfo}월, 얼마나 쓰실 건가요?`}
          />
          <div>
            <div
              style={{
                display: "flex",
                alignitems: "center",
                justifyContent: "space-around",
              }}
            >
              {payingSum === 0 && budgetSum === 0 ? (
                <>empty</>
              ) : (
                <>
                  <ContentHeader
                    yearInfo={yearInfo}
                    monthInfo={monthInfo}
                    used={payingSum}
                    remained={pocketMoney}
                    isBudget={true}
                    budgetSum={budgetSum}
                  ></ContentHeader>
                </>
              )}
            </div>
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
        </div>
      </div>
      <Footer />
    </BudgetBlock>
  );
};

export default Auth(Budget, true);
