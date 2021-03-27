import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { AiFillLock } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { loginUser } from "../../../actions/userActions";
import { Link, withRouter } from "react-router-dom";
import { COLORS } from "../../GlobalStyles";
import routes from "../../../routes";

const LoginForm = styled.form`
  position: absolute;
  padding: 2rem;
  left: 40%;
  background-color: white;
  margin-top: 6rem;
  max-width: 364px;
`;

const Input = styled.input`
  background: none;
  border: none;
  outline: none;
  flex: 1;
  height: 3rem;
  font-size: 1.2rem;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1.5px solid black;

  svg {
    font-size: 1.7rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  button {
    flex: 1;
  }
  a {
    display: flex;
    button {
      flex: 1;
      background-color: ${(props) => props.color};
    }
  }
`;

const Button = styled.button`
  background: ${(props) => props.color};
  border: none;
  outline: none;
  font-weight: 600;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  width: 100%;
  flex: 1;

  &:hover {
    cursor: pointer;
  }
`;

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");

  const onIdChange = (e) => {
    setId(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    let body = {
      id: Id,
      password: Password,
    };

    const response = await dispatch(loginUser(body));

    if (response.LoginSuccess) {
      history.push("/");
    } else {
      alert(response.message);
      // Popup.alert("로그인에 실패하였습니다.");
    }

    // NavBar 같은 곳에서 로그인 이후에 reducer에 존재하는 user에 user_id를 할당해주면 될 것 같음. 그리고 나머지 요소들에서 로그인 여부에 따른 처리를 해주면 될 것 같음.
  };

  return (
    <LoginForm onSubmit={onSubmit}>
      <InputContainer>
        <BsFillPersonFill />
        <Input
          type="id"
          placeholder="ID를 입력하세요"
          onChange={onIdChange}
          required
        ></Input>
      </InputContainer>
      <InputContainer>
        <AiFillLock />
        <Input
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={onPasswordChange}
          autoComplete="cc-number"
          required
        ></Input>
      </InputContainer>
      <ButtonContainer>
        <Button color={COLORS.skyblue} type="submit">
          로그인
        </Button>
        {/* 로그인 안된 상태에서만 가능하도록 처리해줘야 함. */}
        <Link to={routes.join}>
          <Button color={COLORS.navy}>회원가입</Button>
        </Link>
      </ButtonContainer>
    </LoginForm>
  );
};

export default withRouter(Login);
