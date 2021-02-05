import { Link, withRouter } from "react-router-dom";
import { FaPiggyBank } from "react-icons/fa";
import { BsPerson, BsFillPersonFill, BsPersonPlus } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { GrLogout, GrLogin } from "react-icons/gr";
import styled from "styled-components";
// import { COLORS } from "./GlobalStyles";

const Header = styled.nav`
  position: fixed;
  z-index: 1;
  height: 10vh;
  width: 100%;
  line-height: 30px;
`;

const LogoBlock = styled.ul`
  display: flex;
  svg {
    font-size: 1.5rem;
    /* color:  */
  }
  flex: 1;
`;

const NavBlock = styled.div`
  background-color: #5956e9;
  display: flex;
`;

const UserBlock = styled.div`
  display: flex;
`;

const List = styled.li`
  margin-left: 0.5rem;

  border-bottom: 3px solid
    ${(props) => (props.current ? "black" : "transparent")};
`;

const SLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const Nav = withRouter(({ location: { pathname } }) => {
  return (
    <Header>
      <NavBlock>
        <LogoBlock>
          <List current={pathname === "/"}>
            <SLink to="/">
              <FaPiggyBank /> PiggyBank
            </SLink>
          </List>
        </LogoBlock>
        {/* 로그인 상태와 로그인 상태가 아닌 경우를 나누어, NavBar를 구성해준다. 또한 이 부분은 아이콘으로도 뵤여줄 것. 
        BsFillPersonFill(로그인)*/}
        <UserBlock>
          <List current={pathname === "/mypage"}>
            <SLink to="/mypage">
              <BsPerson />
              마이페이지
            </SLink>
          </List>
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
          <List>
            <SLink to="api/users/logout">
              <GrLogout />
              로그아웃
            </SLink>
          </List>
        </UserBlock>
        <List>
          <IoSearch /> Search
        </List>
      </NavBlock>
    </Header>
  );
});

export default Nav;
