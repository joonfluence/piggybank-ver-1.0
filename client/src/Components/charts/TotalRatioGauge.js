import React, { useEffect } from "react";
import styled from "styled-components";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteBudget, monthBudget } from "../../redux/actions/budgetActions";
import {
  deleteSavingGoal,
  monthSavingGoal,
} from "../../redux/actions/savingGoalActions";
import Button from "../utils/Button";

const TotalRatioGaugeBlock = styled.div`
  position: relative;
  background-color: grey;
  width: 10rem;
  height: 1rem;
  margin-right: 1rem;

  .chart-gauge {
    background-color: skyblue;
    height: 1rem;
  }
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: -400%;
  right: -40%;
  font-size: 2rem;
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
    if (isBudget) {
      dispatch(deleteBudget(id)).then((response) => {
        if (response.payload.data.success) {
          alert("삭제 되었습니다.");
        }
      });
    } else {
      dispatch(deleteSavingGoal(id)).then((response) => {
        if (response.payload.data.success) {
          alert("삭제 되었습니다.");
        }
      });
    }
  };

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
  }, [dispatch]);

  const confirmDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      alert("삭제되었습니다");
      onDelete(data._id);
    } else {
      alert("취소되었습니다");
    }
  };

  let gauge = Math.floor((categorySum * 100) / data.price, 2);

  return (
    <TotalRatioGaugeBlock>
      <StyledButton>
        <RiDeleteBack2Fill onClick={confirmDelete} />
      </StyledButton>
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

export default React.memo(TotalRatioGauge);
