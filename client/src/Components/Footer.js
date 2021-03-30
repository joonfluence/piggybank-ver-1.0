import React from "react";
import styled from "styled-components";
import { SiBlogger } from "react-icons/si";
import { AiOutlineGithub } from "react-icons/ai";
import { MdLocalPostOffice } from "react-icons/md";

const FooterBlock = styled.footer`
  background-color: ${(props) => props.theme.color.grey};
  /* height: 10vh; */
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterBlock>
      <div>
        <dl
          style={{
            display: "flex",
            alignitems: "center",
            justifyContent: "center",
            margin: "0.5rem",
          }}
        >
          <dt>
            <a href="http://joonfluence.tistory.com/">
              <SiBlogger /> Blog
            </a>
          </dt>
          <dt>
            <a href="https://github.com/heyJoon">
              <AiOutlineGithub /> Git-hub
            </a>
          </dt>
          <dt>© 2021, heyJoon</dt>
        </dl>
      </div>
      <div>
        <MdLocalPostOffice /> goodfluence@naver.com
      </div>
    </FooterBlock>
  );
};

export default Footer;
