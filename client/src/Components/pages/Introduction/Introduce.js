import React from "react";
import styled from "styled-components";
import CenterButton from "../../CenterButton";
import Footer from "../../Footer";
import Header from "../../Header";

const IntroduceBlock = styled.div``;

const MessageBlock = styled.div`
  background-color: white;
  font-size: 1.1rem;
  padding: 5vh;

  h2,
  p {
    padding: 1rem;
  }
`;

const Introduce = () => {
  return (
    <IntroduceBlock>
      <Header />
      <CenterButton />
      <MessageBlock>
        <h2>Piggybank 소개</h2>
        <p>
          단순히, 지출을 계획하는 것만으로도 많은 것이 달라집니다. 오늘부터
          계획적인 지출을 통해, 불필요한 지출을 줄여보세요.
        </p>
        <h2>어플 사용 방법</h2>
        <div>
          1. [이번달 목표 정하기] 탭에서 이번달 예산과 지출 목표액을 작성한다.
        </div>
        <div>2. [가계부 쓰기] 탭에서 지출 목록과 저축 목록을 작성한다. </div>
        <div>3. [마이페이지] 탭에서 전체적인 데이터를 확인한다. </div>
      </MessageBlock>
      <Footer />
    </IntroduceBlock>
  );
};

export default Introduce;
