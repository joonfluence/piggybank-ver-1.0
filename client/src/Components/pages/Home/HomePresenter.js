import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FormBoard from "../../FormBoard";

const HomePresenterBlock = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonList = styled.div`
  display: flex;
  margin: 1rem;
`;

const HomePresenter = () => {
  return (
    <>
      <HomePresenterBlock>
        <ButtonList>
          {/* 
          두 버튼에 1) 지출목표액 입력하기 2) 소비목표액 입력하기, 두 개로 나눠서 입력 받기. 
          그리고 해당 데이터들은 전부 백엔드 및 프론트엔드에 보관될 예정임 
          */}
          <FormBoard></FormBoard>
          <FormBoard></FormBoard>
        </ButtonList>
      </HomePresenterBlock>
    </>
  );
};

export default HomePresenter;
