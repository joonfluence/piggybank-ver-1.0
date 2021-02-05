import React, { useState } from "react";
import styled from "styled-components";
import CreateList from "./CreateList";
import { AiOutlinePlus } from "react-icons/ai";

const CreateBoardBlock = styled.section`
  svg {
    color: #5956e9;
    font-size: 2.5rem;
  }
`;

const FormTitle = styled.h1`
  font-size: 28px;
  font-weight: 600;
`;

const FormFormat = styled.form``;

const FormInput = styled.input``;

const CreateBoard = () => {
  const { input, setInput } = useState("");

  const onButtonClick = () => {};
  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <AiOutlinePlus onClick={onButtonClick} />
      <CreateBoardBlock>
        <FormTitle>2020년 1월 20일 소비정보</FormTitle>
        <FormFormat onSubmit={onSubmit}>
          {/* Date 객체로 받아, 현재 날짜로 나타내줘야 함. */}
          <FormInput
            onChange={onChange}
            placeholder="지출명"
            value={input}
          ></FormInput>
          <FormInput
            onChange={onChange}
            placeholder="지출금액"
            value={input}
          ></FormInput>
          <FormInput
            onChange={onChange}
            placeholder="메모"
            value={input}
          ></FormInput>
          <FormInput
            onChange={onChange}
            type="date"
            value="2021-02-04"
            placeholder="날짜"
          ></FormInput>
          <FormInput id="CS" type="radio"></FormInput>
          <label htmlFor="CS">소비 </label>
          <FormInput id="SV" type="radio"></FormInput>
          <label htmlFor="SV">저축 </label>
          <FormInput type="submit" value="전송하기"></FormInput>
        </FormFormat>
      </CreateBoardBlock>
      <CreateList></CreateList>
    </>
  );
};

export default CreateBoard;
