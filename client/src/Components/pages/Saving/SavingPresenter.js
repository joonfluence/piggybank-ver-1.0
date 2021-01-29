import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import InputBoard from "../../InputBoard";
import MainBoard from "../../MainBoard";
import UserInfo from "../../UserInfo";

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
