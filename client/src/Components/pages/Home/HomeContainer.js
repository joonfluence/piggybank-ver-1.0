import React, { useState } from "react";
import Header from "../../Header";
import HomePresenter from "./HomePresenter";

const HomeContainer = () => {
  return (
    <>
      <Header HeaderInfo="자산" />
      <HomePresenter></HomePresenter>
    </>
  );
};

export default HomeContainer;
