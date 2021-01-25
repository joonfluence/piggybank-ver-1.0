import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Login from "../../Components/Login";

const LoginPresenterBlock = styled.div``;

const LoginPresenter = () => {
  return (
    <LoginPresenterBlock>
      <Login></Login>
    </LoginPresenterBlock>
  );
};

export default LoginPresenter;
