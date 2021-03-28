import React, { useEffect } from "react";
import styled from "styled-components";
import ContentHeader from "../../../ContentHeader";
import ContentBody from "../../../ContentBody";
import { useDispatch } from "react-redux";
import FormBoard from "../../../FormBoard";
import { monthBudget } from "../../../../redux/actions/budgetActions";
import { monthPaying } from "../../../../redux/actions/payingActions";

const BudgetMonthPresenterBlock = styled.div``;
const BudgetMonthBlock = styled.div`
  position: relative;
`;
const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const BudgetMonthPresenter = ({
  yearInfo,
  monthInfo,
  budgetSum,
  payingSum,
  pocketMoney,
  monthlyBudget,
}) => {
  const dispatch = useDispatch();

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

  return (
    <BudgetMonthPresenterBlock>
      <FormBoard
        isBudget={true}
        budgetInfo="식비"
        title="예산항목"
        yearInfo={yearInfo}
        monthInfo={monthInfo}
        mention={`${monthInfo}월, 얼마나 쓰실 건가요?`}
      />
      <BudgetMonthBlock>
        <HeaderBlock>
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
        </HeaderBlock>
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
      </BudgetMonthBlock>
    </BudgetMonthPresenterBlock>
  );
};

export default BudgetMonthPresenter;
