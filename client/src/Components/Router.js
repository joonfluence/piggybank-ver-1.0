import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home";
import Join from "../Components/pages/Join/Join";
import Login from "../Components/pages/Login/Login";
import Saving from "./pages/Saving/Saving";
import Paying from "./pages/Paying/Paying";
import Nav from "./Nav";
import routes from "../routes.js";
import Mypage from "./pages/Mypage/Mypage";
import SavingGoal from "./pages/SavingGoal/SavingGoal";
import Budget from "./pages/Budget/Budget";
import Introduce from "./pages/Introduction/Introduce";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.join} component={Join} />
        <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.mypage} component={Mypage} />
        <Route exact path={routes.paying} component={Paying} />
        <Route exact path={routes.saving} component={Saving} />
        <Route exact path="/introduction" component={Introduce} />
        <Route exact path={routes.budget} component={Budget} />
        <Route exact path={routes.savingGoal} component={SavingGoal} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
