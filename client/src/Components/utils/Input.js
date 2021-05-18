import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  height: 3rem;
  border-radius: 10px;
  width: 100%;
  font-size: 1.2rem;
`;

const Input = (props) => {
  return <StyledInput {...props} />;
};

export default React.memo(Input);
