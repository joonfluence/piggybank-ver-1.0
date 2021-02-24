import React from "react";
import styled from "styled-components";
import { budgetApi } from "../api";

const ModalBackground = styled.div`
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 1;
`;
const ModalWrapper = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  top: 20%;
  left: 50%;
  margin: 0 0 0 -250px;
  background: #eee;
  z-index: 2;

  & > div > h1 {
    font-size: 2rem;
    padding: 1.5rem;
  }
`;
const ModalClose = styled.div`
  position: absolute;
  right: 0%;
  background-color: red;
  width: 3rem;
`;
const DateModalForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 150px 0 0 0;
  & > input {
    margin: 0 auto;
    width: 80%;
    height: 1.5rem;
    background-color: skyblue;
  }
`;
const ModalButton = styled.button`
  background-color: blue;
  margin: 0 auto;
  width: 5rem;
  height: 1.5rem;
  cursor: pointer;
`;
const SubmitBtn = styled.button`
  background-color: blue;
  margin: 0 auto;
  width: 80%;
  height: 1.5rem;
  cursor: pointer;
`;

const DateModal = ({
  year,
  month,
  modalOpen,
  setYear,
  setMonth,
  setModalOpen,
}) => {
  const onSubmitModal = async (e) => {
    await budgetApi.getBudgetMonth([year, month]);
    e.preventDefault();
    setYear(year);
    setMonth(month);
    setModalOpen(false);
  };

  const onOpenModal = (e) => {
    setModalOpen(true);
  };

  const onCloseModal = (e) => {
    setModalOpen(false);
  };

  const onChangeYear = (e) => {
    setYear(e.target.value);
  };

  const onChangeMonth = (e) => {
    setMonth(e.target.value);
  };

  return (
    <>
      <ModalButton onClick={onOpenModal}>Modal Open</ModalButton>
      {modalOpen && (
        <>
          <ModalBackground></ModalBackground>
          <ModalWrapper>
            <ModalClose onClick={onCloseModal}>
              <div>X</div>
            </ModalClose>
            <div>
              <h1>연/월 데이터를 입력해주세요</h1>
              <DateModalForm method="GET" onSubmit={onSubmitModal}>
                <input
                  type="text"
                  name="year"
                  onChange={onChangeYear}
                  value={year}
                ></input>
                <input
                  type="text"
                  name="month"
                  onChange={onChangeMonth}
                  value={month}
                ></input>
                <SubmitBtn type="submit">전송</SubmitBtn>
              </DateModalForm>
            </div>
          </ModalWrapper>
        </>
      )}
    </>
  );
};

export default DateModal;
