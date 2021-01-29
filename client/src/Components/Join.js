import React from "react";
import styled from "styled-components";
import { AiFillLock } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaPiggyBank } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";

const JoinBlock = styled.div`
  margin-top: 6rem;
  margin-left: auto;
  margin-right: 2rem;
  max-width: 364px;
`;

const Input = styled.input`
  background: none;
  border: none;
  outline: none;
  flex: 1;
  height: 3rem;
  font-size: 1.2rem;

  &::placeholder {
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border-top: 1.5px solid black;
  border-left: 1.5px solid black;
  border-right: 1.5px solid black;
  &:nth-child(5) {
    border-bottom: 1.5px solid black;
  }

  svg {
    font-size: 1.7rem;
  }
`;

const Join = () => {
  return (
    <JoinBlock>
      <InputContainer>
        <BsFillPersonFill />
        <Input placeholder="username111@gmail.com"></Input>
      </InputContainer>
      <InputContainer>
        <AiFillLock />
        <Input placeholder="비밀번호를 입력하세요"></Input>
      </InputContainer>
      <InputContainer>
        <AiFillLock />
        <Input placeholder="비밀번호를 입력하세요"></Input>
      </InputContainer>
      <InputContainer>
        <GiMoneyStack />
        <Input placeholder="월 소비예산을 입력하세요"></Input>
      </InputContainer>
      <InputContainer>
        <FaPiggyBank />
        <Input placeholder="월 저축액을 입력하세요"></Input>
      </InputContainer>
    </JoinBlock>
  );
};

export default Join;
