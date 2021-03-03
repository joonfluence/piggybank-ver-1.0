import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { createPaying } from "../actions/payingActions";
import { createSaving } from "../actions/savingActions";
import { AuthCheck } from "../actions/userActions";

const CreateBoardBlock = styled.section`
  /* border: 1px solid black; */
  margin: 0 auto;
  /* padding: 20px; */
  width: 50%;
`;

const FormTitle = styled.h1`
  font-size: 28px;
  font-weight: 600;
`;

const CreateFormBlock = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormInputContainer = styled.div`
  margin: 0 auto;
`;

const FormInput = styled.input`
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
    background-color: #5956e9;
    color: white;
    font-size: 2.5rem;
    &:hover {
      cursor: pointer;
    }
  }
`;

const CreateBoard = ({ userInfo, title, price, memo, category, InfoName }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputMemo, setInputMemo] = useState("");
  const [isPaying, setIsPaying] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [createdDate, setcreatedDate] = useState("");
  const onButtonClick = () => setOpen(!open);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePrice = (e) => {
    setInputPrice(e.target.value);
  };

  const onChangeMemo = (e) => {
    setInputMemo(e.target.value);
  };

  const onChangeDate = (e) => {
    setcreatedDate(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let body = {
      user: userInfo,
      date: createdDate,
      title: name,
      price: inputPrice,
      memo: inputMemo,
    };
    if (isPaying) {
      dispatch(createPaying(body));
    } else {
      dispatch(createSaving(body));
    }
    setName("");
    setInputPrice("");
    setInputMemo("");
    setcreatedDate("");
  };

  const year = new Date().getFullYear();
  const date = new Date().getMonth() + 1;

  return (
    <>
      <IconContainer onClick={onButtonClick} open={open}>
        <AiOutlinePlus />
      </IconContainer>
      {open && (
        <CreateBoardBlock>
          <FormTitle>
            {year}년 {date}월 {InfoName}정보
          </FormTitle>
          <CreateFormBlock onSubmit={onSubmit}>
            <FormInputContainer>
              <FormInput
                onChange={onChangeName}
                placeholder={InfoName + "명"}
                value={name}
              ></FormInput>
            </FormInputContainer>
            <FormInputContainer>
              <FormInput
                onChange={onChangePrice}
                placeholder={InfoName + "액"}
                value={inputPrice}
              ></FormInput>
            </FormInputContainer>
            <FormInputContainer>
              <FormInput
                onChange={onChangeMemo}
                placeholder="메모"
                value={inputMemo}
              ></FormInput>
            </FormInputContainer>
            <FormInputContainer>
              <FormInput
                onChange={onChangeDate}
                type="date"
                value={createdDate}
              ></FormInput>
            </FormInputContainer>
            <FormInputContainer>
              <FormInput
                style={{ width: "30px" }}
                id="CS"
                onChange={() => setIsPaying(!isPaying)}
                type="radio"
                value={isPaying}
              ></FormInput>
              <label htmlFor="CS">소비 </label>
              <FormInput
                style={{ width: "30px" }}
                id="SV"
                onChange={() => setIsSaving(!isSaving)}
                type="radio"
                value={isSaving}
              ></FormInput>
              <label htmlFor="SV">저축 </label>
            </FormInputContainer>
            <FormInputContainer>
              <FormInput type="submit" value="전송하기"></FormInput>
            </FormInputContainer>
          </CreateFormBlock>
        </CreateBoardBlock>
      )}
    </>
  );
};

export default CreateBoard;
