import React from "react";
import styled from "styled-components";
const HomePresenterBlock = styled.div``;

const HomePresenter = () => {
  return (
    <>
      <HomePresenterBlock>
        {/* 사용 방법을 추가할 것 */}
        <div>
          <h2>어플 사용 방법</h2>
          <p>1. [생성하기] 탭에서 이번달 예산과 지출 목표액을 작성한다. </p>
          <p>2. [생성하기] 탭에서 지출 목록과 저축 목록을 작성한다. </p>
          <p>3. [탐색하기] 탭에서 생성된 데이터를 확인한다. </p>
        </div>
      </HomePresenterBlock>
    </>
  );
};

export default HomePresenter;
