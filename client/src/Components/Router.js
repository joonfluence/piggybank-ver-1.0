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
import SavingGoalMonth from "./pages/SavingGoal/Month";
import BudgetMonth from "./pages/Budget/Month";
import SavingMonth from "./pages/Saving/Month";
import PayingMonth from "./pages/Paying/Month";
import Auth from "../hoc/auth";
import TestPage from "./pages/test/testPage";

// 나중에 user 이름을 띄워서, 안녕하세요 준호님과 같은 모습을 보여줄 수도 있을 것임.

const Router = () => {
  const { isAuth } = useSelector(({ userReducer }) => ({
    isAuth: userReducer.isAuth,
  }));

  return (
    <BrowserRouter>
      <Nav isAuth={isAuth} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/join" component={Join} />
        <Route exact path="/login" component={Login} />
        <Route exact path={routes.paying} component={Paying} />
        <Route exact path={routes.saving} component={Saving} />
        <Route exact path={routes.budget} component={Budget} />
        <Route exact path={routes.savingGoal} component={SavingGoal} />
        <Route exact path={routes.payingMonth} component={PayingMonth} />
        <Route exact path={routes.savingMonth} component={SavingMonth} />
        <Route exact path={routes.budgetMonth} component={BudgetMonth} />
        <Route
          exact
          path={routes.savingGoalMonth}
          component={SavingGoalMonth}
        />
        <Route exact path={routes.test} component={TestPage} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
