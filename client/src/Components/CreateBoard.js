import React, { useState } from "react";
import styled from "styled-components";
import useInput from "./hooks/useInput";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createPaying, readPaying } from "../redux/actions/payingActions";
import { createSaving, readSaving } from "../redux/actions/savingActions";
import { createBudget, monthBudget } from "../redux/actions/budgetActions";
import {
  createSavingGoal,
  monthSavingGoal,
} from "../redux/actions/savingGoalActions";

const CreateBoardBlock = styled.section`
  .createBoard__Block {
    margin: 0 auto;
    width: 50%;
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

  .form-input {
    border: 1px solid black;
    width: 364px;
    height: 3rem;

    &::placeholder {
      font-size: 1.2rem;
    }

    &:last-child {
      cursor: pointer;
    }
  }

  .form-select {
    margin: 0 auto;
    border: 1px solid black;
    width: 364px;
    height: 3rem;
  }
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
  const onButtonClick = () => setOpen(!open);

  const onSubmit = (e) => {
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
            dispatch(monthBudget({ yearInfo, monthInfo }));
          }
        });
      } else {
        dispatch(createSavingGoal(body)).then((response) => {
          if (response.payload.data.CreateSuccess) {
            dispatch(monthSavingGoal({ yearInfo, monthInfo }));
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
  };

  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;

  return (
    <CreateBoardBlock>
      <div className="icon__container" onClick={onButtonClick} open={open}>
        <span>{InfoName}항목 작성하기</span>
        <AiOutlinePlus />
      </div>
      {open && (
        <div className="createBoard__block">
          <h1>
            {year}년 {month}월 {InfoName}정보
          </h1>
          <form className="create-form" onSubmit={onSubmit}>
            <div>
              <input
                className="form-input"
                placeholder={InfoName + "명"}
                {...bindName}
                required
              ></input>
            </div>
            <div>
              <input
                className="form-input"
                placeholder={InfoName + "액"}
                {...bindInputPrice}
                required
              ></input>
            </div>
            <div>
              <input
                className="form-input"
                type="date"
                {...bindDate}
                required
              ></input>
            </div>
            {isPaying || isSaving ? (
              <>
                <select className="form-select" {...bindCategory}>
                  <option>카테고리</option>
                  {selectOptions ? (
                    selectOptions.map((data) => (
                      <option value={data._id}>{data.title}</option>
                    ))
                  ) : (
                    <></>
                  )}
                </select>
                <div>
                  {isPaying ? (
                    <>
                      <input
                        className="form-input"
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
                        className="form-input"
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
              <input
                className="form-input"
                type="submit"
                value="전송하기"
              ></input>
            </div>
          </form>
        </div>
      )}
    </CreateBoardBlock>
  );
};

export default CreateBoard;
