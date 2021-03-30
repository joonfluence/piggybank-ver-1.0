import React from "react";
import styled from "styled-components";
import CenterButton from "../../common/CenterButton";
import Footer from "../../common/Footer";
import Header from "../../common/Header";

const IntroduceBlock = styled.div`
  .message__container {
    background-color: white;
    font-size: 1.1rem;
    padding-top: 0vh;
    padding-bottom: 5vh;

    h2 {
      padding: 1.4rem;
    }

    div {
      margin: 0 auto;
      width: 45%;
    }
  }
`;

const Introduce = () => {
  return (
    <IntroduceBlock>
      <Header />
      <CenterButton />
      <div className="message__container">
        <h2>Piggybank 소개</h2>
        <div>
          <span>
            계획하는 것만으로도 많은 것이 달라집니다.
            <br />
            불필요한 지출은 줄이고 저축은 늘려보세요.
          </span>
          <h2>어플 사용 방법</h2>
          <span>
            1. [목표 정하기] : 이번달 예산과 지출 목표액을 작성한다.
            <br />
            2. [가계부 쓰기] : 지출과 저축 내역을 작성한다.
            <br />
            3. [마이페이지] : 이번달의 전체적인 데이터를 확인한다.
          </span>
        </div>
      </div>
      <Footer />
    </IntroduceBlock>
  );
};

export default Introduce;
