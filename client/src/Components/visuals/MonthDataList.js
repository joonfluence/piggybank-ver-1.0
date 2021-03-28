import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CategoryBlock from "./CategoryBlock";
import TotalRatioGauge from "./TotalRatioGauge";
import { monthBudget } from "../../redux/actions/budgetActions";
import { monthSavingGoal } from "../../redux/actions/savingGoalActions";

const MonthDataListBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  .chart-block {
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.color.grey};
    margin: 1.5rem;
  }
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
  }, []);

  return (
    <MonthDataListBlock>
      {monthlyData ? (
        monthlyData.map((data) => (
          <div className="chart-block">
            <CategoryBlock color={color} data={data} isCategory={false} />
            <TotalRatioGauge
              data={data}
              yearInfo={yearInfo}
              monthInfo={monthInfo}
              isBudget={isBudget}
              categorySum={data.categoryPrice}
            />
          </div>
        ))
      ) : (
        <div>empty</div>
      )}
    </MonthDataListBlock>
  );
};

export default MonthDataList;
