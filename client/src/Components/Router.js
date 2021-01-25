import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "../Routes/Home/index";
import Join from "../Routes/Join/index";
import Login from "../Routes/Login/index";
import MyPage from "../Routes/Myspace/index";
import Saving from "../Routes/Saving/index";
import Detail from "../Routes/Detail/index";
import Nav from "./Nav";

const Router = () => {
  return (
    <BrowserRouter>
      <>
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
      </>
    </BrowserRouter>
  );
};

export default Router;
