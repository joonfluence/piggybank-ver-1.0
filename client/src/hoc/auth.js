import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function Auth(SpecificComponent, option, adminRoute = null) {
  const AuthenticationCheck = (props) => {
    const { isAuth } = useSelector(({ userReducer }) => ({
      isAuth: userReducer.isAuth,
    }));

    useEffect(() => {
      if (!isAuth) {
        // console.log("isAuth : false, 즉 로그인하지 않은 상태");
        if (option) {
          alert("로그인이 필요합니다.");
          props.history.push("/login");
        }
      } else {
        // console.log("isAuth : true, 즉 로그인한 상태");
        if (adminRoute) {
          // console.log("일반유저가 admin 페이지에 접근 시");
          props.history.push("/");
        } else {
          if (option === false) {
            alert("로그인한 유저가 접근할 수 없습니다");
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
