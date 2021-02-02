import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "../Components/pages/Home/";
import Join from "../Components/pages/Join/";
import Login from "../Components/pages/Login/";
import MyPage from "../Components/pages/Myspace/";
import Saving from "../Components/pages/Saving/";
import PayingDetail from "../Components/pages/Paying/Detail/";
import SavingDetail from "../Components/pages/Saving/Detail/";
import Paying from "../Components/pages/Paying/";
import Category from "../Components/pages/Paying/Detail/";
import PayingMonth from "../Components/pages/Paying/Month/";
import SavingMonth from "../Components/pages/Saving/Month/";
import Nav from "./Nav";
import routes from "../routes.js";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/join" component={Join} />
        <Route path="/login" component={Login} />
        <Route path={routes.mypage()} component={MyPage} />
        <Route path={routes.saving()} component={Saving} />
        <Route path={routes.paying()} component={Paying} />
        <Route path={routes.payingMonth()} component={PayingMonth} />
        <Route path={routes.savingMonth()} component={SavingMonth} />
        <Route path={routes.categoryPaying()} component={Category} />
        <Route path={routes.categoryPayingMonth()} component={Category} />
        <Route path={routes.payings()} component={PayingDetail} />
        <Route path={routes.savings()} component={SavingDetail} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
