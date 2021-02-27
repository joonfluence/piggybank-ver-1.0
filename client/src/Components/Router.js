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
import TestPage from "./pages/test/testPage";
import Auth from "../hoc/auth";

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
        <Route path={routes.paying} exact component={Auth(Paying, true)} />
        <Route path={routes.saving} exact component={Auth(Saving, true)} />
        <Route path={routes.budget} exact component={Auth(Budget, true)} />
        <Route
          path={routes.savingGoal}
          exact
          component={Auth(SavingGoal, true)}
        />
        <Route
          path={routes.payingMonth}
          exact
          component={Auth(PayingMonth, true)}
        />
        <Route
          path={routes.savingMonth}
          exact
          component={Auth(SavingMonth, true)}
        />
        <Route
          path={routes.budgetMonth}
          exact
          component={Auth(BudgetMonth, true)}
        />
        <Route
          path={routes.savingGoalMonth}
          exact
          component={Auth(SavingGoalMonth, true)}
        />
        <Route path={"/test"} exact component={Auth(TestPage, true)} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
