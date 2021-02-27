import React, { useState } from "react";
import styled from "styled-components";
import { AiFillLock } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaPiggyBank } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { joinUser } from "../../../actions/userActions";
import { useDispatch } from "react-redux";

const JoinBlock = styled.form`
  position: absolute;
  left: 40%;
  padding: 2rem;
  background-color: white;
  margin-top: 6rem;
  /* margin-left: auto;
  margin-right: 2rem;
  max-width: 364px; */
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
  border: 1.5px solid black;

  svg {
    font-size: 1.7rem;
  }

  &:last-child {
    margin-top: 1.5rem;
  }
`;

const Join = () => {
  const dispatch = useDispatch();
  const [Name, setName] = useState("");
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [PasswordConfirm, setPasswordConfirm] = useState("");

  // Join State 관리를 해주어야 함. 그래야 로그인 할 수 있음.

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onIdChange = (e) => {
    setId(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onPasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let body = {
      name: Name,
      email: Email,
      id: Id,
      password: Password,
      passwordConfirm: PasswordConfirm,
    };
    console.log(body);
    dispatch(joinUser(body));
    setName("");
    setId("");
    setPassword("");
    setEmail("");
    setPasswordConfirm("");
  };

  return (
    <JoinBlock onSubmit={onSubmit}>
      <label htmlFor="name">이름</label>
      <InputContainer>
        <BsFillPersonFill />
        <Input
          id="name"
          type="name"
          placeholder="홍길동"
          onChange={onNameChange}
          value={Name}
          required
        />
      </InputContainer>
      <label htmlFor="ID">아이디</label>
      <InputContainer>
        <BsFillPersonFill />
        <Input
          id="id"
          type="id"
          placeholder="helloworld"
          onChange={onIdChange}
          value={Id}
          required
        />
      </InputContainer>
      <label htmlFor="password">비밀번호</label>
      <InputContainer>
        <AiFillLock />
        <Input
          id="password"
          type="password"
          autoComplete="new-password"
          placeholder="비밀번호를 입력하세요"
          onChange={onPasswordChange}
          value={Password}
          required
        ></Input>
      </InputContainer>
      <label htmlFor="password2">비밀번호 확인</label>
      <InputContainer>
        <AiFillLock />
        <Input
          id="password2"
          type="password"
          autoComplete="new-password"
          placeholder="비밀번호를 입력하세요"
          onChange={onPasswordConfirmChange}
          value={PasswordConfirm}
          required
        ></Input>
      </InputContainer>
      <label htmlFor="email">이메일</label>
      <InputContainer>
        <MdEmail />
        <Input
          id="email"
          placeholder="username111@gmail.com"
          onChange={onEmailChange}
          value={Email}
          required
        ></Input>
      </InputContainer>
      <InputContainer>
        <Input id="submit" type="submit" value="전송하기" />
      </InputContainer>
    </JoinBlock>
  );
};

export default Join;
