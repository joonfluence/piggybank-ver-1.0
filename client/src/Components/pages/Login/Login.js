import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { AiFillFacebook, AiFillLock } from "react-icons/ai";
import { RiKakaoTalkFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { loginUser } from "../../../actions/user_actions";
import { withRouter } from "react-router-dom";

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
    }
  }
`;

const Button = styled.button`
  background: #5956e9;
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

const SocialLoginBlock = styled.div`
  .fb-icon {
    color: #3a559f;
  }
  .kk-icon {
    color: #391b1b;
    background-color: yellow;
  }
  svg {
    font-size: 2rem;
    margin: 5px;
  }
`;

const Login = (props) => {
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

    // console.log(response);
    // console.log(user);
    // console.log(isAuth);
    // console.log(store.getState());

    if (response.LoginSuccess) {
      props.history.push("/");
    } else {
      alert("Error Occured");
    }

    // 로그인 이후에 reducer에 존재하는 user에 user_id를 할당해주면 될 것 같음. 그리고 나머지 요소들에서 로그인 여부에 따른 처리를 해주면 될 것 같음.
    // NavBar 같은 곳에서
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
        <Button type="submit">로그인</Button>
        {/* 로그인 안된 상태에서만 가능하도록 처리해줘야 함. */}
        <a href="/join">
          <Button>회원가입</Button>
        </a>
      </ButtonContainer>
      {/* <SocialLoginBlock>
        <AiFillFacebook className="fb-icon" />
        <RiKakaoTalkFill className="kk-icon" />
      </SocialLoginBlock> */}
    </LoginForm>
  );
};

export default withRouter(Login);
