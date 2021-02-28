import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AuthCheck } from "../actions/userActions";

function Auth(SpecificComponent, option, adminRoute = null) {
  // auth는 자신의 내부함수, AuthenticationCheck를 리턴해준다.
  function AuthenticationCheck(props) {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(AuthCheck()).then((response) => {
        console.log(response);
        // isAuth : false, 즉 로그인하지 않은 상태
        if (!response.payload.isAuth) {
          if (option) {
            props.history.push("/login");
          }
          // 로그인한 상태
        } else {
          if (adminRoute && !response.payload.isAdmin) {
            // 일반유저가 admin 페이지에 접근 시
            props.history.push("/");
          } else {
            if (option === false) {
              // 로그인한 유저가 로그인하지 않은 상태로 접근 시
              props.history.push("/");
            }
          }
        }
      });
    }, []);
    return <SpecificComponent />;
  }
  return AuthenticationCheck;
}

export default Auth;

//  isAuth : false, 즉 로그인하지 않은 상태
