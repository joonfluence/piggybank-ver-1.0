import React from "react";
import styled from "styled-components";
import CreateBoard from "./CreateBoard";

const CreateTemplateBlock = styled.section`
  background-color: white;
  width: 80%;
`;

const ContentTitle = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  background-color: #eaf6ff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 2rem;
  height: 15vh;
  width: 80%;
`;

const ContentInfo = styled.div`
  display: grid;
  grid-template-columns: 3fr 5fr 5fr;
  column-gap: 1rem;
`;

const ImageCircle = styled.div`
  background-color: grey;
`;

const CreateTemplate = () => {
  return (
    <CreateTemplateBlock>
      <ContentTitle>
        <Content>
          <ContentInfo>
            <h1>2월 </h1>
            <h2>남은 예산</h2>
            <h3> ___원 </h3>
          </ContentInfo>
          <ImageCircle>동그라미</ImageCircle>
        </Content>
      </ContentTitle>
      <CreateBoard></CreateBoard>
    </CreateTemplateBlock>
  );
};

export default CreateTemplate;
