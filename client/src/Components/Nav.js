import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
    background-color: #9943EF;
    display: flex;
    justify-content: space-between;
`;

export default () => {
    return (
        <Header>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/saving">Saving</a>
            </li>
            <li>
                <a href="/mypage">MyPage</a>
            </li>
            <li>
                <a href="/join">Join</a>
            </li>
            <li>
                <a href="/login">login</a>
            </li>
        </Header>
    )
}