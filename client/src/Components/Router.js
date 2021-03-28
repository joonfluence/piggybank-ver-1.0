import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "../Components/pages/Home/";
import Join from "../Components/pages/Join/Join";
import Login from "../Components/pages/Login/Login";
import Saving from "../Components/pages/Saving/";
import Paying from "../Components/pages/Paying/";
import Nav from "./Nav";
import routes from "../routes.js";
import SavingGoalMonth from "./pages/SavingGoal/Month";
import BudgetMonth from "./pages/Budget/Month";
import Mypage from "./pages/Mypage/Mypage";
import Introduce from "./Introduce";

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
        <Route exact path={routes.budgetMonth} component={BudgetMonth} />
        <Route
          exact
          path={routes.savingGoalMonth}
          component={SavingGoalMonth}
        />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
