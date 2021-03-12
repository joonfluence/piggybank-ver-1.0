import { Link, withRouter } from "react-router-dom";
import { FaPiggyBank } from "react-icons/fa";
import { BsPerson, BsPersonPlus } from "react-icons/bs";
import { GrLogout, GrLogin } from "react-icons/gr";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { LogOutUser } from "../actions/userActions";
import routes from "../routes";
import { COLORS } from "./GlobalStyles";
// import { COLORS } from "./GlobalStyles";

const NavContainer = styled.nav`
  position: fixed;
  z-index: 2;
  height: 10vh;
  width: 80%;
  line-height: 30px;
`;

const NavBlock = styled.div`
  background-color: ${(props) => props.color};
  display: flex;
`;

const LogoBlock = styled.ul`
  display: flex;
  margin-left: 1rem;
  svg {
    font-size: 1.5rem;
    /* color:  */
  }
  flex: 1;
`;

const UserBlock = styled.div`
  display: flex;
`;

const List = styled.li`
  margin-right: 1.5rem;
  border-bottom: 3px solid
    ${(props) => (props.current ? "black" : "transparent")};
`;

const SLink = styled(Link)`
  display: flex;
  align-items: center;
`;

/* 로그인 상태와 로그인 상태가 아닌 경우를 나누어, NavBar를 구성해준다. 또한 이 부분은 아이콘으로도 뵤여줄 것. BsFillPersonFill(로그인) */

const Nav = ({ location: { pathname }, history }) => {
  const dispatch = useDispatch();
  const { user, isAuth } = useSelector(({ userReducer }) => ({
    user: userReducer.user,
    isAuth: userReducer.isAuth,
  }));
  return (
    <NavContainer>
      <NavBlock color={COLORS.navy}>
        <LogoBlock>
          <List current={pathname === routes.home}>
            <SLink to={routes.home}>
              <FaPiggyBank /> PiggyBank
            </SLink>
          </List>
        </LogoBlock>
        <UserBlock>
          {isAuth ? (
            <>
              <List current={pathname === routes.mypage(user)}>
                <SLink to={routes.mypage(user)}>
                  <BsPerson />
                  마이페이지
                </SLink>
              </List>
              <List>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    dispatch(LogOutUser()).then((response) => {
                      if (response.LogOutSuccess) {
                        window.location.href = "/";
                      }
                    })
                  }
                >
                  <GrLogout />
                  로그아웃
                </span>
              </List>
            </>
          ) : (
            <>
              <List current={pathname === "/join"}>
                <SLink to="/join">
                  <BsPersonPlus />
                  회원가입
                </SLink>
              </List>
              <List current={pathname === "/login"}>
                <SLink to="/login">
                  <GrLogin />
                  로그인
                </SLink>
              </List>
            </>
          )}
        </UserBlock>
      </NavBlock>
    </NavContainer>
  );
};

export default withRouter(Nav);
