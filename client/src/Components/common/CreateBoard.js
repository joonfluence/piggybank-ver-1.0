import React, { useCallback, useState } from "react";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createPaying, readPaying } from "../../Redux/actions/payingActions";
import { createSaving, readSaving } from "../../Redux/actions/savingActions";
import { createBudget, monthBudget } from "../../Redux/actions/budgetActions";
import {
  createSavingGoal,
  monthSavingGoal,
} from "../../Redux/actions/savingGoalActions";
import theme from "../../Style/theme";
import Button from "../utils/Button";
import Input from "../utils/Input";

const CreateBoardBlock = styled.section`
  .createBoard__Block {
    padding: 2rem;
    background-color: ${(props) => props.theme.color.lightgrey};

    .input__container {
      background-color: ${(props) => props.theme.color.white};
    }
  }

  .icon__container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    font-size: 2rem;
    span:hover {
      cursor: pointer;
    }

    svg {
      border-radius: 20px;
      background-color: ${(props) => props.theme.color.navy};
      font-size: 2.5rem;

      color: white;
      &:hover {
        cursor: pointer;
      }
    }
  }

  .create-form {
    display: flex;
    margin-top: 1rem;
    flex-direction: column;
  }

  .form-select {
    margin: 0 auto;
    border: 1px solid black;
    width: 364px;
    height: 3rem;
  }
`;

const StyledInput = styled(Input)`
  border: 1px solid black;
  width: 364px;
  height: 3rem;
`;

const StyledButton = styled(Button)`
  border: 1px solid black;
  width: 364px;
  height: 3rem;
`;

const CreateBoard = ({
  isBudget,
  isSaving,
  isSavingGoal,
  isPaying,
  InfoName,
  selectOptions,
}) => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector(({ userReducer }) => ({
    userInfo: userReducer.userId,
  }));
  const { yearInfo, monthInfo } = useSelector(({ dateReducer }) => ({
    yearInfo: dateReducer.yearInfo,
    monthInfo: dateReducer.monthInfo,
  }));

  const [open, setOpen] = useState(false);
  const { value: name, reset: resetName, bind: bindName } = useInput("");
  const {
    value: inputPrice,
    reset: resetInputPrice,
    bind: bindInputPrice,
  } = useInput("");
  const { value: date, reset: resetDate, bind: bindDate } = useInput("");
  const {
    value: category,
    reset: resetCategory,
    bind: bindCategory,
  } = useInput("");
  const { value: option, bind: bindOption } = useInput(InfoName);
  const onButtonClick = useCallback(() => setOpen(!open), []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if (isBudget || isSavingGoal) {
      let body = {
        user: userInfo,
        date,
        title: name,
        price: inputPrice,
      };
      if (isBudget) {
        dispatch(createBudget(body)).then((response) => {
          if (response.payload.data.CreateSuccess) {
            dispatch(monthBudget({ year: yearInfo, month: monthInfo }));
          }
        });
      } else {
        dispatch(createSavingGoal(body)).then((response) => {
          if (response.payload.data.CreateSuccess) {
            dispatch(monthSavingGoal({ year: yearInfo, month: monthInfo }));
          }
        });
      }
      resetName();
      resetInputPrice();
      resetDate();
    } else if (isPaying || isSaving) {
      let body = {
        user: userInfo,
        date,
        category,
        title: name,
        price: inputPrice,
      };
      if (option === "소비") {
        dispatch(createPaying(body)).then((response) => {
          if (response.payload.data.success) {
            dispatch(readPaying());
          }
        });
      } else if (option === "저축") {
        dispatch(createSaving(body)).then((response) => {
          if (response.payload.data.success) {
            dispatch(readSaving());
          }
        });
      }
      resetName("");
      resetInputPrice("");
      resetDate("");
      resetCategory("");
    }
  }, []);

  return (
    <CreateBoardBlock>
      <div className="icon__container" onClick={onButtonClick} open={open}>
        <span>{InfoName}항목 작성하기</span>
        <AiOutlinePlus />
      </div>
      {open && (
        <div className="createBoard__Block">
          <h1>
            {yearInfo}년 {monthInfo}월 {InfoName}정보
          </h1>
          <form className="create-form" onSubmit={onSubmit}>
            <div className="input__container">
              <StyledInput
                placeholder={InfoName + "명"}
                {...bindName}
                required
              ></StyledInput>
            </div>
            <div className="input__container">
              <StyledInput
                placeholder={InfoName + "액"}
                {...bindInputPrice}
                required
              ></StyledInput>
            </div>
            <div className="input__container">
              <StyledInput type="date" {...bindDate} required></StyledInput>
            </div>
            {isPaying || isSaving ? (
              <>
                <select className="form-select" {...bindCategory}>
                  <option>카테고리</option>
                  {selectOptions ? (
                    selectOptions.map((data, index) => (
                      <option key={index} value={data._id}>
                        {data.title}
                      </option>
                    ))
                  ) : (
                    <></>
                  )}
                </select>
                <div className="input__container">
                  {isPaying ? (
                    <>
                      <input
                        style={{ width: "30px" }}
                        id="CS"
                        type="radio"
                        checked={option === "소비"}
                        {...bindOption}
                        required
                      ></input>
                      <label htmlFor="CS">소비 </label>
                    </>
                  ) : (
                    <>
                      <input
                        style={{ width: "30px" }}
                        id="SV"
                        type="radio"
                        checked={option === "저축"}
                        {...bindOption}
                        required
                      ></input>
                      <label htmlFor="SV">저축 </label>
                    </>
                  )}
                </div>
              </>
            ) : (
              <></>
            )}
            <div>
              <StyledButton color={theme.color.navy} type="submit">
                전송하기
              </StyledButton>
            </div>
          </form>
        </div>
      )}
    </CreateBoardBlock>
  );
};

export default CreateBoard;
