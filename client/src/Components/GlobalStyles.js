import { createGlobalStyle } from "styled-components";
// import reset from "styled-reset";
/* ${reset}; */

const globalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Oswald:wght@500&display=swap');
    * {
        margin: 0;
        padding: 0;
        border: 0;
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
        font-size: 1rem;
        font-weight: 600;
        font-style: inherit;
    }
    
    ul, li > a {
      font-family: "Oswald", sans-serif;
    }
    
    body {
        position: relative;
        font-size: 1rem;
        font-weight: 400;
        font-family: 'Lato', sans-serif;
        text-align: center;
        background-color: ${(props) => props.theme.color.apricot};
        margin: 0 auto;
        border-radius: 4px;
    }

    #wrapper {
        width: 100%;
        margin: 0 auto;
    }

    button, form, input {
        background:none;
        border: none;
        outline: none;
    }
`;

export default globalStyles;
