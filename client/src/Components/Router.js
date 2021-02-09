import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
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
import Nav from "./Nav";
import routes from "../routes.js";
import auth from "../hoc/auth";

const Router = () => {
  const { user, isAuth } = useSelector(({ userReducer }) => ({
    user: userReducer.user,
    isAuth: userReducer.isAuth,
  }));

  return (
    <BrowserRouter>
      {/* 로그인/로그아웃 상태를 구분짓기 위한 props를 전달해준다. */}
      <Nav isAuth={isAuth} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/join" exact component={Join} />
        <Route path="/login" exact component={Login} />
        <Route path={routes.mypage()} exact component={MyPage} />
        <Route path={routes.paying} exact component={Paying} />
        <Route path={routes.saving} exact component={Saving} />
        <Route path={routes.budget} exact component={Budget} />
        <Route path={routes.savingGoal} exact component={SavingGoal} />
        <Route path={routes.payings()} exact component={PayingDetail} />
        <Route path={routes.savings()} exact component={SavingDetail} />
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
