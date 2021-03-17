import React from "react";
import styled from "styled-components";
import { RiDeleteBack2Fill } from "react-icons/ri";
import {
  deleteSavingGoal,
  monthSavingGoal,
} from "../../actions/savingGoalActions";
import { deleteBudget, monthBudget } from "../../actions/budgetActions";
import { useDispatch } from "react-redux";
import TotalRatioChart from "./TotalRatioChart";

const TotalRatioGaugeBlock = styled.div`
  position: relative;
  background-color: grey;
  width: 10rem;
  height: 1rem;
  margin-right: 1rem;
`;

const DeleteButton = styled.div`
  position: absolute;
  top: -400%;
  right: 0%;
  font-size: 2rem;
`;

const TotalRatioTemplate = ({
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
      dispatch(deleteBudget(id));
      dispatch(monthBudget(body));
    } else {
      dispatch(deleteSavingGoal(id));
      dispatch(monthSavingGoal(body));
    }
  };

  return (
    <TotalRatioGaugeBlock>
      <DeleteButton>
        <RiDeleteBack2Fill onClick={() => onDelete(data._id)} />
      </DeleteButton>
      <TotalRatioChart
        data={data}
        isBudget={isBudget}
        categorySum={categorySum}
      ></TotalRatioChart>
    </TotalRatioGaugeBlock>
  );
};

export default TotalRatioTemplate;
