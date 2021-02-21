import React, { useState } from "react";
import styled from "styled-components";
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

const CreateBoard = ({ date, title, price, memo, category, InfoName }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputMemo, setInputMemo] = useState("");
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
  };

  return (
    <>
      <IconContainer onClick={onButtonClick} open={open}>
        <AiOutlinePlus />
      </IconContainer>
      {open && (
        <CreateBoardBlock>
          <FormTitle>
            2021년 {date}월 {InfoName}정보
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
    </>
  );
};

export default CreateBoard;
