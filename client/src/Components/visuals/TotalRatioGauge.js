import React from "react";
import styled from "styled-components";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteBudget, monthBudget } from "../../redux/actions/budgetActions";
import {
  deleteSavingGoal,
  monthSavingGoal,
} from "../../redux/actions/savingGoalActions";

const TotalRatioGaugeBlock = styled.div`
  position: relative;
  background-color: grey;
  width: 10rem;
  height: 1rem;
  margin-right: 1rem;

  .delete-btn {
    position: absolute;
    top: -400%;
    right: 0%;
    font-size: 2rem;
  }

  .chart-gauge {
    background-color: skyblue;
    height: 1rem;
  }
`;

const TotalRatioGauge = ({
  categorySum,
  isBudget,
  data,
  yearInfo,
  monthInfo,
}) => {
  const dispatch = useDispatch();
  const onDelete = (id) => {
    let body = {
      year: yearInfo,
      month: monthInfo,
    };
    if (isBudget) {
      dispatch(deleteBudget(id)).then((response) => {
        if (response.payload.data.success) {
          alert("삭제 되었습니다.");
        }
      });
      dispatch(monthBudget(body));
    } else {
      dispatch(deleteSavingGoal(id)).then((response) => {
        if (response.payload.data.success) {
          alert("삭제 되었습니다.");
        }
      });
      dispatch(monthSavingGoal(body));
    }
  };

  let gauge = Math.floor((categorySum * 100) / data.price, 2);

  return (
    <TotalRatioGaugeBlock>
      <button className="delete-btn">
        <RiDeleteBack2Fill onClick={() => onDelete(data._id)} />
      </button>
      <div>
        <div className="chart-gauge" style={{ width: `${gauge}%` }} />
        <span>총소비액 : {categorySum}원 </span>
        {isBudget ? (
          <span>({`소비율 ` + gauge + `%`})</span>
        ) : (
          <span>({`달성률 ` + gauge + `%`})</span>
        )}
      </div>
    </TotalRatioGaugeBlock>
  );
};

export default TotalRatioGauge;
