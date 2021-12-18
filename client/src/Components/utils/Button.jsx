import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.color};
  width: 100%;
  font-weight: 600;
  padding: 10px;
  border-radius: 10px;
  line-height: 14px;
  height: 3rem;

  &:hover {
    cursor: pointer;
  }
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default React.memo(Button);
