import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Home from "../Routes/Home/Home"
import Join from "../Routes/Join/Join";
import Login from "../Routes/Login/Login";
import MyPage from "../Routes/Myspace/MyPage";
import Saving from "../Routes/Saving/Saving";
import Detail from "../Routes/Detail/Detail";

export default () => {
    return (
        <Router>
            <>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/join" exact component={Join}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/mypage" exact component={MyPage}/>
                    <Route path="/mypage/:id" exact component={MyPage}/>
                    <Route path="/saving" exact component={Saving}/>
                    <Route path="/saving/:id" exact component={Detail}/>
                    <Route path="/consumption/:id" exact component={Detail}/>
                    <Redirect from="*" to="/" />
                </Switch>
            </>
        </Router>
    )
}