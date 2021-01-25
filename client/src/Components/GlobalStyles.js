import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    
    * {
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
        font-size: 1.5rem;
        font-weight: 600;
    }

    #root {
        margin: 0 auto;
        max-width: 1080px;
    }

    body {
        position: relative;
        font-size: 1rem;
        font-weight: 400;
        max-width: 768px;
        text-align: center;
        margin: 0 auto;
    }
`;

export default globalStyles;
