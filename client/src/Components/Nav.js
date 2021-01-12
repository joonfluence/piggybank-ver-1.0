import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
    background-color: #9943EF;
    display: flex;
    justify-content: space-between;
`;

const List = styled.li`
    border-bottom: 3px solid #9932cc;
`;

const SLink = styled(Link)`

`;

export default withRouter(({location : { pathname }}) => {
    return (
        <Nav>
            <List>
               <SLink to="/">Home</SLink>
            </List>
            <List>
                <SLink to="/saving">Saving</SLink>
            </List>
            <List>
                <SLink to="/mypage">MyPage</SLink>
            </List>
            <List>
                <SLink to="/join">Join</SLink>
            </List>
            <List>
                <SLink to="/login">login</SLink>
            </List>
            <List>
                Search
            </List>
        </Nav>
    )
})