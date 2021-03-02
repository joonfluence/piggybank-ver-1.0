import React from "react";
import styled from "styled-components";

const CreateListBlock = styled.div`
  padding-bottom: 1rem;
`;

const InputContentBlock = styled.div`
  background-color: #ffe0f9;
  margin: 3rem;
`;

const InputContent = styled.div``;

const InputTitle = styled.div``;

const InputPrice = styled.div``;

const InputDate = styled.div``;

const CreateList = ({ dataList }) => {
  return (
    <CreateListBlock>
      <InputContentBlock>
        {dataList ? (
          dataList.map((data) => (
            <InputContent>
              <InputTitle>{data.title}</InputTitle>
              <InputPrice>{data.title}</InputPrice>
              <InputDate>{data.date}</InputDate>
            </InputContent>
          ))
        ) : (
          <div>empty</div>
        )}
      </InputContentBlock>
    </CreateListBlock>
  );
};

export default CreateList;
