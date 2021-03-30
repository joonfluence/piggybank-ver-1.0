import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { AiFillLock } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { Link, withRouter } from "react-router-dom";
import routes from "../../../routes";
import { loginUser } from "../../../redux/actions/userActions";
import Button from "../../common/Button";
import theme from "../../../Style/theme";
import Input from "../../common/Input";

const LoginForm = styled.form`
  background-color: ${(props) => props.theme.color.lightgrey};
  position: absolute;
  padding: 2rem;
  left: 35%;
  margin-top: 6rem;
  max-width: 364px;

  .input__container {
    background: ${(props) => props.theme.color.white};
    display: flex;
    align-items: center;
    border: 1.5px solid black;

    svg {
      font-size: 1.7rem;
    }
  }
  .btn__container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

const StyledInput = styled(Input)`
  flex: 1;
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
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
    }
  };

  return (
    <LoginForm onSubmit={onSubmit}>
      <div className="input__container">
        <BsFillPersonFill />
        <StyledInput
          type="id"
          placeholder="ID를 입력하세요"
          onChange={onIdChange}
          required
        ></StyledInput>
      </div>
      <div className="input__container">
        <AiFillLock />
        <StyledInput
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={onPasswordChange}
          autoComplete="cc-number"
          required
        ></StyledInput>
      </div>
      <div className="btn__container">
        <StyledButton color={theme.color.skyblue} type="submit">
          로그인
        </StyledButton>
        <Link to={routes.join}>
          <StyledButton color={theme.color.navy}>회원가입</StyledButton>
        </Link>
      </div>
    </LoginForm>
  );
};

export default withRouter(Login);
