import { Link } from "react-router-dom";

export default () => {
    return (
        <header>
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
        </header>
    )
}