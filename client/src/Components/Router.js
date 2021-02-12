import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../Components/pages/Home/";
import Join from "../Components/pages/Join/Join";
import Login from "../Components/pages/Login/Login";
import Saving from "../Components/pages/Saving/";
import Paying from "../Components/pages/Paying/";
import Budget from "../Components/pages/Budget/";
import SavingGoal from "../Components/pages/SavingGoal/";
import Nav from "./Nav";
import routes from "../routes.js";
import auth from "../hoc/auth";

// 나중에 user 이름을 띄워서, 안녕하세요 준호님과 같은 모습을 보여줄 수도 있을 것임.

const Router = () => {
  const { user, isAuth } = useSelector(({ userReducer }) => ({
    user: userReducer.user,
    isAuth: userReducer.isAuth,
  }));

  return (
    <BrowserRouter>
      <Nav isAuth={isAuth} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/join" exact component={Join} />
        <Route path="/login" exact component={Login} />
        <Route path={routes.paying} exact component={Paying} />
        <Route path={routes.saving} exact component={Saving} />
        <Route path={routes.budget} exact component={Budget} />
        <Route path={routes.savingGoal} exact component={SavingGoal} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
