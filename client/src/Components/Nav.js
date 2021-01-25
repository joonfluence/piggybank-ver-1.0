import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  /* position: fixed; */
  /* height: 10vh; */
  /* width: 100%; */
  /* max-width: 1080px; */
  line-height: 30px;
`;

const NavBlock = styled.nav`
  background-color: #9943ef;
  display: flex;
  justify-content: space-around;
`;

const List = styled.li`
  border-bottom: 3px solid
    ${(props) => (props.current ? "black" : "transparent")};
`;

const SLink = styled(Link)``;

const Nav = withRouter(({ location: { pathname } }) => {
  return (
    <Header>
      <NavBlock>
        <List current={pathname === "/"}>
          <SLink to="/">Home</SLink>
        </List>
        <List current={pathname === "/saving"}>
          <SLink to="/saving">Saving</SLink>
        </List>
        <List current={pathname === "/login"}>
          <SLink to="/login">Login</SLink>
        </List>
        <List current={pathname === "/logout"}>
          <SLink to="/logout">LogOut</SLink>
        </List>
      </NavBlock>
    </Header>
  );
});

export default Nav;
