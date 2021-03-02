import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getDateInfo } from "../actions/dateAction";

const ModalBackground = styled.div`
  position: absolute;
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
  background-color: #f4ecfb;
  position: absolute;
  right: 12%;
  top: 8%;
  width: 5rem;
  height: 3rem;
  z-index: 1;
  font-size: 1.2rem;
  cursor: pointer;
`;
const SubmitBtn = styled.button`
  background-color: blue;
  margin: 0 auto;
  width: 80%;
  height: 1.5rem;
  cursor: pointer;
`;

const DateModal = () => {
  const tempYear = new Date().getFullYear();
  const tempMonth = new Date().getMonth() + 1;

  const [year, setYear] = useState(tempYear.toString());
  const [month, setMonth] = useState(tempMonth.toString());

  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();
  const onSubmitModal = async (e) => {
    e.preventDefault();
    let body = {
      year: `${year}`,
      month: `${month}`,
    };
    await dispatch(getDateInfo(body));
    setYear("");
    setMonth("");
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
      <ModalButton onClick={onOpenModal}>조회하기</ModalButton>
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
