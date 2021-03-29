import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../../Header";
import { Helmet } from "react-helmet";
import Auth from "../../../hoc/auth";
import CenterButton from "../../CenterButton";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../Footer";
import ContentHeader from "../../ContentHeader";
import ContentBody from "../../ContentBody";
import { monthSaving } from "../../../redux/actions/savingActions";
import { monthSavingGoal } from "../../../redux/actions/savingGoalActions";
import CreateBoard from "../../CreateBoard";

const SavingGoalBlock = styled.div`
  .content {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
      <Header />
      <CenterButton />
      <div className="content">
        <CreateBoard isSavingGoal={true} InfoName="예산" />
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
      <Footer />
    </SavingGoalBlock>
  );
};

export default Auth(SavingGoal, true);
