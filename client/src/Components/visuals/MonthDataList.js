import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { COLORS } from "../GlobalStyles";
import CategoryBlock from "./CategoryBlock";
import TotalRatioTemplate from "./TotalRatioTemplate";
import { monthBudget } from "../../actions/budgetActions";
import { monthSavingGoal } from "../../actions/savingGoalActions";

const MonthDataListBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const TotalRatioChartBlock = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.color};
  margin: 1.5rem;
`;

const MonthDataList = ({ monthlyData, color, isBudget }) => {
  const dispatch = useDispatch();
  const { yearInfo, monthInfo } = useSelector(({ dateReducer }) => ({
    yearInfo: dateReducer.yearInfo,
    monthInfo: dateReducer.monthInfo,
  }));

  useEffect(() => {
    let body = {
      year: yearInfo,
      month: monthInfo,
    };
    if (isBudget) {
      dispatch(monthBudget(body));
    } else {
      dispatch(monthSavingGoal(body));
    }
  }, [monthlyData.length]);

  return (
    <MonthDataListBlock>
      {monthlyData ? (
        monthlyData.map((data) => (
          <TotalRatioChartBlock color={COLORS.grey}>
            <CategoryBlock color={color} data={data} isCategory={false} />
            <TotalRatioTemplate
              data={data}
              yearInfo={yearInfo}
              monthInfo={monthInfo}
              isBudget={isBudget}
              categorySum={data.categoryPrice}
            />
          </TotalRatioChartBlock>
        ))
      ) : (
        <div>empty</div>
      )}
    </MonthDataListBlock>
  );
};

export default MonthDataList;
