import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    * {
        border-radius: 4px;
        animation-duration: 300ms;
    }
    a {
        text-decoration: none;
    }
    
    a, strong, span, h2 {
        color: inherit;
    }
    
    ul, li {
        list-style: none;
    }

    header {
        font-size: 24px;
        font-weight: 600;
    }

    #root {
        max-width: 1080px;
    }

    html {
        margin: 0 auto;
        text-align: center;
    }

    body {
        font-size: 18px;
        font-weight: 400;
        display: flex;
        justify-content: center;
        align-items: center;
        /* font-family: 'Poor Story', cursive; */
    }
`

export default globalStyles;