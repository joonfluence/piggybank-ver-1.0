import React from "react";
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
  return (
    <InputBoardBlock>
      <FormFormat>
        <FormTitle>2020년 1월 20일 소비정보</FormTitle>
        <FormInput type="text" value="test"></FormInput>
        <FormInput id="CS" type="radio"></FormInput>
        <label for="CS">소비</label>
        <FormInput id="SV" type="radio"></FormInput>
        <label for="SV">저축</label>
        <FormInput type="submit" value="전송하기"></FormInput>
      </FormFormat>
    </InputBoardBlock>
  );
};

export default InputBoard;
