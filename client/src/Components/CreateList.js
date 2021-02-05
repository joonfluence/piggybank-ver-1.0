import React from "react";
import styled from "styled-components";

const CreateListBlock = styled.div``;

const InputContentBlock = styled.div`
  background-color: #ffe0f9;
  width: 80%;
  margin: 3rem;
`;

const InputContent = styled.div``;

const InputTitle = styled.div``;

const InputPrice = styled.div``;

const InputDate = styled.div``;

const CreateList = () => {
  return (
    <CreateListBlock>
      <InputContentBlock>
        <InputContent>
          <InputTitle>김밥천국</InputTitle>
          <InputPrice>2500</InputPrice>
          <InputDate>2021/02/01</InputDate>
        </InputContent>
      </InputContentBlock>
      <InputContentBlock>
        <InputContent>
          <InputTitle>맥도날드</InputTitle>
          <InputPrice>5000</InputPrice>
          <InputDate>2021/02/02</InputDate>
        </InputContent>
      </InputContentBlock>
      <InputContentBlock>
        <InputContent>
          <InputTitle>다이소</InputTitle>
          <InputPrice>3000</InputPrice>
          <InputDate>2021/02/04</InputDate>
        </InputContent>
      </InputContentBlock>
      <InputContentBlock>
        <InputContent>
          <InputTitle>뭐냐</InputTitle>
          <InputPrice>1000</InputPrice>
          <InputDate>2021/02/04</InputDate>
        </InputContent>
      </InputContentBlock>
    </CreateListBlock>
  );
};

export default CreateList;
