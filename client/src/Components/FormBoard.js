import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { COLORS } from "./GlobalStyles";
import { useDispatch, useSelector } from "react-redux";
import { createSavingGoal } from "../actions/savingGoalActions";
import { createBudget } from "../actions/budgetActions";

const FormBoardBlock = styled.div`
  position: relative;
  background-color: white;
`;

const FormHeader = styled.div``;

const FormContent = styled.div``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const Input = styled.input`
  border: 1px solid black;
  width: 364px;
  height: 3rem;

  &::placeholder {
    font-size: 1.2rem;
  }

  &:last-child {
    cursor: pointer;
  }
`;

const IconContainer = styled.div`
  svg {
    border-radius: 20px;
    background-color: ${(props) => props.color};
    color: white;
    font-size: 2.5rem;
    &:hover {
      cursor: pointer;
    }
  }
`;

const FormBoard = ({ isBudget, budgetInfo, mention }) => {
  const { userInfo } = useSelector(({ userReducer }) => ({
    userInfo: userReducer.userId,
  }));
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const onButtonClick = () => setOpen(!open);
  const [name, setName] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [createdDate, setCreatedDate] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    let body = {
      user: userInfo,
      date: createdDate,
      title: name,
      price: inputPrice,
    };
    if (isBudget) {
      dispatch(createBudget(body));
    } else {
      dispatch(createSavingGoal(body));
    }
    setName("");
    setInputPrice("");
    setCreatedDate("");
  };

  const onChangeDate = (e) => {
    setCreatedDate(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePrice = (e) => {
    setInputPrice(e.target.value);
  };

  return (
    <>
      <IconContainer color={COLORS.navy} onClick={onButtonClick} open={open}>
        <AiOutlinePlus />
      </IconContainer>
      {open && (
        <FormBoardBlock>
          <FormHeader>
            <h1>{mention}</h1>
          </FormHeader>
          <FormContent>
            <Form onSubmit={onSubmit}>
              <Input
                type="text"
                placeholder={budgetInfo}
                onChange={onChangeName}
                value={name}
              />
              <Input
                type="text"
                placeholder="000원"
                onChange={onChangePrice}
                value={inputPrice}
              />
              <Input
                onChange={onChangeDate}
                type="date"
                value={createdDate}
                required
              ></Input>
              <Input type="submit" placeholder="추가하기" />
            </Form>
          </FormContent>
        </FormBoardBlock>
      )}
    </>
  );
};

export default FormBoard;
