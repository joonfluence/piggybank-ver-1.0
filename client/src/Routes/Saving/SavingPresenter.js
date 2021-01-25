import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import InputBoard from "../../Components/InputBoard";
import MainBoard from "../../Components/MainBoard";
import UserInfo from "../../Components/UserInfo";

const SavingPresenter = () => {
  return (
    <>
      <MainBoard></MainBoard>
      <InputBoard></InputBoard>
      <UserInfo></UserInfo>
    </>
  );
};

export default SavingPresenter;
