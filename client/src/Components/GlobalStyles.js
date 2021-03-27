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
        background-color: #F4ECFB;
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

export const COLORS = {
  navy: "#9d9cff", //버튼색, 표 배경색, NavBar
  darkNavy: "#5d5bfc",
  lightpurple: "#F4ECFB", // 배경색
  apricot: "#ffecdb", // 아이템 배경색, 유저 배경색
  pink: "#ffdef8", //시간에 대한 배경색
  skyblue: "#c9e8ff", //카테고리 배경색
  black: "#000000",
  white: "#FFFFFF",
  red: "#F43518",
  green: "#2E8849",
  grey: "#dbdbdb",
  darkgrey: "#292930",
};
