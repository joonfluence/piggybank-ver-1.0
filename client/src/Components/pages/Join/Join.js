import React, { useState } from "react";
import styled from "styled-components";
import { AiFillLock } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import Auth from "../../../hoc/auth";
import { withRouter } from "react-router";
import { joinUser } from "../../../redux/actions/userActions";

const JoinBlock = styled.form`
  position: absolute;
  left: 40%;
  padding: 2rem;
  background-color: white;
  margin-top: 6rem;
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
    background: ${(props) => props.theme.color.pink};
    border: none;
    outline: none;
    font-weight: 600;
    /* padding: 10px; */
    margin-top: 10px;
    border-radius: 10px;
    width: 100%;
    flex: 1;

    &:hover {
      cursor: pointer;
    }
  }
`;

const Join = ({ history }) => {
  const dispatch = useDispatch();
  const [Name, setName] = useState("");
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");
  const [PasswordConfirm, setPasswordConfirm] = useState("");

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

  const onSubmit = (e) => {
    e.preventDefault();

    let body = {
      name: Name,
      id: Id,
      password: Password,
      passwordConfirm: PasswordConfirm,
    };
    dispatch(joinUser(body)).then((response) => {
      if (response.payload.data.joinSuccess) {
        alert("회원가입에 성공했습니다.");
        history.push("/login");
      } else {
        alert("다시 시도해주세요.");
      }
    });
    setName("");
    setId("");
    setPassword("");
    setPasswordConfirm("");
  };

  return (
    <JoinBlock onSubmit={onSubmit}>
      <label htmlFor="name"></label>
      <InputContainer>
        <BsFillPersonFill />
        <Input
          id="name"
          type="name"
          placeholder="이름을 입력하세요"
          onChange={onNameChange}
          value={Name}
          required
        />
      </InputContainer>
      <label htmlFor="ID"></label>
      <InputContainer>
        <BsFillPersonFill />
        <Input
          id="id"
          type="id"
          placeholder="아이디를 입력하세요"
          onChange={onIdChange}
          value={Id}
          required
        />
      </InputContainer>
      <label htmlFor="password"></label>
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
      <label htmlFor="password2"></label>
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
      <InputContainer>
        <Input id="submit" type="submit" value="전송하기" />
      </InputContainer>
    </JoinBlock>
  );
};

export default Auth(withRouter(Join), false);
