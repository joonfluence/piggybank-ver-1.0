import React, { useState } from "react";
import Header from "../../Header";
import CenterButton from "../../CenterButton";
import HomePresenter from "./HomePresenter";

const HomeContainer = () => {
  return (
    <>
      <Header HeaderInfo="자산" />
      <CenterButton />
      <HomePresenter></HomePresenter>
    </>
  );
};

export default HomeContainer;
