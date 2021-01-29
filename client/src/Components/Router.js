import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "../Components/pages/Home/index";
import Join from "../Components/pages/Join/index";
import Login from "../Components/pages/Login/index";
import MyPage from "../Components/pages/Myspace/index";
import Saving from "../Components/pages/Saving/index";
import Detail from "../Components/pages/Detail/index";
import Nav from "./Nav";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/join" exact component={Join} />
        <Route path="/login" exact component={Login} />
        <Route path="/mypage" exact component={MyPage} />
        <Route path="/mypage/:id" exact component={MyPage} />
        <Route path="/saving" exact component={Saving} />
        <Route path="/saving/:id" exact component={Detail} />
        <Route path="/consumption/:id" exact component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
