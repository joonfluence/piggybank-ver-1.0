import React from "react";
import Header from "../../Header";
import CenterButton from "../../CenterButton";
import HomePresenter from "./HomePresenter";
import Auth from "../../../hoc/auth";

const HomeContainer = () => {
  return (
    <>
      <Header HeaderInfo="자산" />
      <CenterButton />
      <HomePresenter></HomePresenter>
    </>
  );
};

export default Auth(HomeContainer, null);
