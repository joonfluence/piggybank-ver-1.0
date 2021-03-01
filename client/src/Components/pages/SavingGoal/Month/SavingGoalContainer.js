import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CenterButton from '../../../CenterButton';
import Header from '../../../Header';
import SavingGoalsPresenter from "./SavingGoalPresenter";

const SavingGoalContainerBlock = styled.div`
`;

const SavingGoalContainer = () => {
    const { yearInfo, monthInfo } = useSelector(({ dateReducer }) => ({
    yearInfo: dateReducer.yearInfo,
    monthInfo: dateReducer.monthInfo,
    }));

    const { budgetSum, monthlyBudget } = useSelector(({ budgetReducer }) => ({
    budgetSum: budgetReducer.budgetSum,
    monthlyBudget: budgetReducer.monthlyBudget,
    }));

    const { payingSum } = useSelector(({ payingReducer }) => ({
    payingSum: payingReducer.payingSum,
    }));

  const pocketMoney = budgetSum - payingSum;

    return (
        <SavingGoalContainerBlock>
            <Header HeaderInfo="월 지출"></Header>
            <CenterButton />
            <SavingGoalsPresenter
              yearInfo={yearInfo}
              monthInfo={monthInfo}
              pocketMoney={pocketMoney}
              budgetSum={budgetSum}
              payingSum={payingSum}
              monthlyBudget={monthlyBudget}
            />
        </SavingGoalContainerBlock>
    );
};

export default SavingGoalContainer;