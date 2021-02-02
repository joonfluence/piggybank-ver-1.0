import React, { useState } from "react";
import styled from "styled-components";

const InputBoardBlock = styled.section`
  background-color: darkgray;
  height: 600px;
`;

const FormTitle = styled.h1`
  font-size: 28px;
  font-weight: 600;
`;

const FormFormat = styled.form`
  background-color: blue;
`;

const FormInput = styled.input``;

const InputBoard = () => {
  const { input, setInput } = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <InputBoardBlock>
      <FormFormat>
        <FormTitle>2020년 1월 20일 소비정보</FormTitle>
        <FormInput onChange={onChange} type="text" value="test"></FormInput>
        <FormInput id="CS" type="radio"></FormInput>
        <label htmlfor="CS">소비</label>
        <FormInput id="SV" type="radio"></FormInput>
        <label htmlfor="SV">저축</label>
        <FormInput type="submit" value="전송하기"></FormInput>
      </FormFormat>
    </InputBoardBlock>
  );
};

export default InputBoard;
