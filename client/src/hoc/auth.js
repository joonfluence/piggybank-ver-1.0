import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AuthCheck } from "../actions/user_actions";

function auth(SpecificComponent) {
  // auth는 자신의 내부함수, AuthenticationCheck를 리턴해준다.

  const AuthenticationCheck = (props) => {
    const dispatch = useDispatch();
    // dispatch => action => reducer
    useEffect(() => {
      dispatch(AuthCheck()).then((response) => {
        // isAuth : false, 즉 로그인하지 않은 상태
        if (!response.payload.isAuth) {
          alert("로그인이 필요합니다");
          props.history.push("/login");
          // 로그인한 상태
        } else {
          // 로그인한 유저가 로그인하지 않은 상태로 접근 시
          props.history.push("/");
        }
      });
    }, []);
    return <SpecificComponent />;
  };
  return AuthenticationCheck;
}

export default auth;
