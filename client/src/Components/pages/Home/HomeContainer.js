import React, { useState } from "react";
import HomePresenter from "./HomePresenter";
import { Api } from "../../../api";

const HomeContainer = () => {
  const { data, setData } = useState(Api.getPayingInfo());
  return <HomePresenter data={data}></HomePresenter>;
};

export default HomeContainer;
