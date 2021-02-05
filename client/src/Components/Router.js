import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "../Components/pages/Home/";
import Join from "../Components/pages/Join/Join";
import Login from "../Components/pages/Login/Login";
import MyPage from "../Components/pages/Myspace/";
import Saving from "../Components/pages/Saving/";
import PayingDetail from "../Components/pages/Paying/Detail/";
import SavingDetail from "../Components/pages/Saving/Detail/";
import Paying from "../Components/pages/Paying/";
import Budget from "../Components/pages/Budget/";
import PayingMonth from "../Components/pages/Paying/Month/";
import SavingMonth from "../Components/pages/Saving/Month/";
import BudgetMonth from "../Components/pages/Budget/Month/";
import SavingGoal from "../Components/pages/SavingGoal/";
// import Category from "../Components/pages/Paying/Detail/";
import Nav from "./Nav";
import routes from "../routes.js";
import auth from "../hoc/auth";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/join" exact component={Join} />
        <Route path="/login" exact component={Login} />
        <Route path={routes.mypage()} exact component={auth(MyPage)} />
        <Route path={routes.paying} exact component={auth(Paying)} />
        <Route path={routes.saving} exact component={auth(Saving)} />
        <Route path={routes.budget} exact component={auth(Budget)} />
        <Route path={routes.savingGoal} exact component={auth(SavingGoal)} />
        <Route path={routes.payings()} exact component={auth(PayingDetail)} />
        <Route path={routes.savings()} exact component={auth(SavingDetail)} />
        <Route
          path={routes.budgetMonth()}
          exact
          component={auth(BudgetMonth)}
        />
        <Route
          path={routes.payingMonth()}
          exact
          component={auth(PayingMonth)}
        />
        <Route
          path={routes.savingMonth()}
          exact
          component={auth(SavingMonth)}
        />
        {/* <Route path={routes.categoryPaying()} component={Category} /> */}
        {/* <Route path={routes.categorySaving()} component={Category} /> */}
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
