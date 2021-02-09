import React from "react";
import styled from "styled-components";
import ContentBoard from "./ContentBoard";
import ContentHeader from "./ContentHeader";

// fake data

const CreateTemplateBlock = styled.section`
  background-color: white;
`;

const CreateTemplate = () => {
  return (
    <CreateTemplateBlock>
      <ContentHeader></ContentHeader>
      <ContentBoard></ContentBoard>
    </CreateTemplateBlock>
  );
};

export default CreateTemplate;
