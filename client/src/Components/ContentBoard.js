import React, { useState } from "react";
import styled from "styled-components";
import CreateList from "./CreateList";
import { AiOutlinePlus } from "react-icons/ai";

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

const FormFormat = styled.form`
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

const CreateBoard = ({ Date, InfoName }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [memo, setMemo] = useState("");
  const [date, setDate] = useState("");

  const onButtonClick = () => setOpen(!open);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const onChangeMemo = (e) => {
    setMemo(e.target.value);
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <IconContainer onClick={onButtonClick} open={open}>
        <AiOutlinePlus />
      </IconContainer>
      {open && (
        <CreateBoardBlock>
          <FormTitle>
            2021년 {Date}월 {InfoName}정보
          </FormTitle>
          <FormFormat onSubmit={onSubmit}>
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
                value={price}
              ></FormInput>
            </FormInputContainer>
            <FormInputContainer>
              <FormInput
                onChange={onChangeMemo}
                placeholder="메모"
                value={memo}
              ></FormInput>
            </FormInputContainer>
            <FormInputContainer>
              <FormInput
                onChange={onChangeDate}
                type="date"
                value={date}
              ></FormInput>
            </FormInputContainer>
            <FormInputContainer>
              <FormInput
                style={{ width: "30px" }}
                id="CS"
                type="radio"
              ></FormInput>
              <label htmlFor="CS">소비 </label>
              <FormInput
                style={{ width: "30px" }}
                id="SV"
                type="radio"
              ></FormInput>
              <label htmlFor="SV">저축 </label>
            </FormInputContainer>
            <FormInputContainer>
              <FormInput type="submit" value="전송하기"></FormInput>
            </FormInputContainer>
          </FormFormat>
        </CreateBoardBlock>
      )}
      <CreateList></CreateList>
    </>
  );
};

export default CreateBoard;
