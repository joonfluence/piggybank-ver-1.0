import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { COLORS } from "./GlobalStyles";

const FormBoardBlock = styled.div`
  position: relative;
  background-color: white;
  margin-top: 2rem;
`;

const FormHeader = styled.div``;

const FormContent = styled.div``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
`;

const Input = styled.input`
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
    background-color: ${(props) => props.color};
    color: white;
    font-size: 2.5rem;
    &:hover {
      cursor: pointer;
    }
  }
`;

const FormBoard = () => {
  const [open, setOpen] = useState(false);
  const onButtonClick = () => setOpen(!open);

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <IconContainer color={COLORS.navy} onClick={onButtonClick} open={open}>
        <AiOutlinePlus />
      </IconContainer>
      {open && (
        <FormBoardBlock>
          <FormHeader>
            <h1>2월, 얼마나 쓰실 건가요?</h1>
          </FormHeader>
          <FormContent>
            <Form onSubmit={onSubmit}>
              <Input type="text" placeholder="식비" />
              <Input type="text" placeholder="000원" />
              <Input type="submit" placeholder="추가하기" />
            </Form>
          </FormContent>
        </FormBoardBlock>
      )}
    </>
  );
};

export default FormBoard;
