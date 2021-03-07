import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userApi } from "../api";

function Auth(SpecificComponent, option, adminRoute = null) {
  const AuthenticationCheck = (props) => {
    const { isAuth } = useSelector(({ userReducer }) => ({
      isAuth: userReducer.isAuth,
    }));

    useEffect(() => {
      if (!isAuth) {
        console.log("isAuth : false, 즉 로그인하지 않은 상태");
        if (option) {
          props.history.push("/login");
        }
      } else {
        console.log("isAuth : true, 즉 로그인한 상태");
        if (adminRoute) {
          console.log("일반유저가 admin 페이지에 접근 시");
          props.history.push("/");
        } else {
          if (option === false) {
            console.log("로그인한 유저가 로그인하지 않은 상태로 접근 시");
            props.history.push("/");
          }
        }
      }
    }, [isAuth]);
    return <SpecificComponent />;
  };
  return AuthenticationCheck;
}

export default Auth;
