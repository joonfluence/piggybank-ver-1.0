import { createGlobalStyle } from "styled-components";
// import reset from "styled-reset";
/* ${reset}; */

const globalStyles = createGlobalStyle`
  @font-face {
    font-family: "EuclidCircleA";
    src: url("../fonts/EuclidCircularA-Medium.eot");
    src: url("../fonts/EuclidCircularA-Medium.eot?#iefix") format(‘embedded-opentype’),
      url("../fonts/EuclidCircularA-Medium.woff2") format(‘woff2’),
      url("../fonts/EuclidCircularA-Medium.ttf") format("truetype");
  }
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
        font-size: 1.5rem;
        font-weight: 600;
    }
    body {
        position: relative;
        font-size: 1rem;
        font-weight: 400;
        font-family: EuclidCircleA;
        text-align: center;
        background-color: #F4ECFB;
        margin: 0 auto;
        border-radius: 4px;
    }

    #wrapper {
        width: 80%;
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
  lightpurple: "#F4ECFB", // 배경색
  apricot: "#ffecdb", // 아이템 배경색, 유저 배경색
  pink: "#ffdef8", //시간에 대한 배경색
  skyblue: "#c9e8ff", //카테고리 배경색
  black: "#000000",
  white: "#FFFFFF",
  red: "#F43518",
  green: "#2E8849",
  darkgrey: "#292930",
};
