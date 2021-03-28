import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../../Header";
import { Helmet } from "react-helmet";
import Auth from "../../../hoc/auth";
import FormBoard from "../../FormBoard";
import CenterButton from "../../CenterButton";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../Footer";
import ContentHeader from "../../ContentHeader";
import ContentBody from "../../ContentBody";
import { monthSaving } from "../../../redux/actions/savingActions";
import { monthSavingGoal } from "../../../redux/actions/savingGoalActions";

const SavingGoalBlock = styled.div`
  .content {
    background-color: ${(props) => props.theme.color.white};
  }
`;

const SavingGoal = () => {
  const { monthInfo, yearInfo } = useSelector(({ dateReducer }) => ({
    monthInfo: dateReducer.monthInfo,
    yearInfo: dateReducer.yearInfo,
  }));
  const { savingGoalSum, monthlySavingGoal, savingSum } = useSelector(
    ({ savingGoalReducer }) => ({
      savingGoalSum: savingGoalReducer.savingGoalSum,
      monthlySavingGoal: savingGoalReducer.monthlySavingGoal,
      savingSum: savingGoalReducer.categorySum,
    })
  );

  const dispatch = useDispatch();

  useEffect(() => {
    let body = {
      year: yearInfo,
      month: monthInfo,
    };
    async function fetchPageData() {
      await dispatch(monthSaving(body));
      await dispatch(monthSavingGoal(body));
    }
    fetchPageData();
  }, [yearInfo, monthInfo]);

  const pocketMoney = savingGoalSum - savingSum;

  return (
    <SavingGoalBlock>
      <Helmet>
        <meta charSet="utf-8" />
        <title>저축목표관리 | 돼지저금통</title>
      </Helmet>
      <div>
        <Header />
        <div className="content">
          <CenterButton />
          <FormBoard
            isBudget={false}
            yearInfo={yearInfo}
            monthInfo={monthInfo}
            budgetInfo="주식"
            title="저축항목"
            mention={`${monthInfo}월, 얼마나 모으실 건가요?`}
          />
          <div>
            {savingSum === 0 && savingGoalSum === 0 ? (
              <></>
            ) : (
              <ContentHeader
                yearInfo={yearInfo}
                monthInfo={monthInfo}
                used={savingSum}
                remained={pocketMoney}
                isBudget={false}
                savingGoalSum={savingGoalSum}
              ></ContentHeader>
            )}
          </div>
          {monthlySavingGoal !== null ? (
            <ContentBody
              savingGoalSum={savingGoalSum}
              used={savingSum}
              remained={pocketMoney}
              monthlyData={monthlySavingGoal}
              isBudget={false}
            ></ContentBody>
          ) : (
            <div>empty</div>
          )}
        </div>
      </div>
      <Footer />
    </SavingGoalBlock>
  );
};

export default Auth(SavingGoal, true);
