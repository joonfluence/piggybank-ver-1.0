import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../../common/Header";
import { Helmet } from "react-helmet";
import Auth from "../../../hoc/auth";
import CenterButton from "../../common/CenterButton";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../common/Footer";
import ContentHeader from "../../common/ContentHeader";
import ContentBody from "../../common/ContentBody";
import { monthSaving } from "../../../redux/actions/savingActions";
import { monthSavingGoal } from "../../../redux/actions/savingGoalActions";
import CreateBoard from "../../common/CreateBoard";
import DateModal from "../../utils/DateModal";

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

  async function fetchPageData() {
    let body = {
      year: yearInfo,
      month: monthInfo,
    };

    await dispatch(monthSaving(body));
    await dispatch(monthSavingGoal(body));
  }

  useEffect(() => {
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
        <CreateBoard isSavingGoal={true} InfoName="저축목표" />
        <div className="modal__container">
          <DateModal yearInfo={yearInfo} monthInfo={monthInfo} />
        </div>
        <div>
          <ContentHeader
            yearInfo={yearInfo}
            monthInfo={monthInfo}
            used={savingSum}
            remained={pocketMoney}
            isBudget={false}
            savingGoalSum={savingGoalSum}
          ></ContentHeader>
        </div>
        <ContentBody
          savingGoalSum={savingGoalSum}
          used={savingSum}
          remained={pocketMoney}
          monthlyData={monthlySavingGoal}
          isBudget={false}
        ></ContentBody>
      </div>
      <Footer />
    </SavingGoalBlock>
  );
};

export default Auth(SavingGoal, true);
