import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getDateInfo } from "../../redux/actions/dateAction";
import theme from "../../Style/theme";
import Button from "./Button";
import Input from "./Input";

const DateModalBlock = styled.div`
  .modal__wrapper {
    position: absolute;
    width: 500px;
    height: 500px;
    top: 20%;
    left: 50%;
    margin: 0 0 0 -250px;
    background: #eee;
    z-index: 4;
    & > div > h2 {
      font-size: 1.5rem;
      padding-top: 1.5rem;
    }
  }

  .modal__background {
    position: absolute;
    width: 100%;
    height: 147%;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0%;
    z-index: 3;
  }

  .modal__close__btn {
    position: absolute;
    right: 0%;
    background-color: red;
    width: 3rem;
  }

  .content__container {
    margin: 0 auto;
    width: 80%;
  }
`;

const StyledInput = styled(Input)`
  height: 3rem;
  border: 1px solid #99d4ff;
  background-color: ${(props) => props.theme.color.skyblue};
`;

const DateModalForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 150px 0 0 0;
`;

const ModalButton = styled(Button)`
  flex: 1;
  margin-right: 2rem;
  margin-left: 1rem;
  z-index: 1;
  font-size: 1.2rem;
`;

const SubmitBtn = styled(Button)`
  border: 1.7px solid #4645ff;
  margin: 0 auto;
`;

const DateModal = ({ yearInfo, monthInfo }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [year, setYear] = useState(yearInfo);
  const [month, setMonth] = useState(monthInfo);

  const dispatch = useDispatch();

  useEffect(() => {
    window.onkeydown = (event) => {
      if (event.code === "Escape") {
        setModalOpen(false);
      }
    };
  }, [modalOpen]);

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

  const onChangeYear = (e) => {
    setYear(e.target.value);
  };

  const onChangeMonth = (e) => {
    setMonth(e.target.value);
  };

  return (
    <DateModalBlock>
      <ModalButton
        color={theme.color.lightpurple}
        onClick={() => setModalOpen(true)}
      >
        조회
      </ModalButton>
      {modalOpen && (
        <>
          <div className="modal__background"></div>
          <div className="modal__wrapper">
            <div
              className="modal__close__btn"
              onClick={() => setModalOpen(false)}
            >
              <div>X</div>
            </div>
            <div className="content__container">
              <h2>조회를 원하는 달을 선택하세요</h2>
              <DateModalForm onSubmit={onSubmitModal}>
                <StyledInput
                  className="form__input"
                  type="text"
                  name="year"
                  onChange={onChangeYear}
                  value={year}
                ></StyledInput>
                <StyledInput
                  className="form__input"
                  type="text"
                  name="month"
                  onChange={onChangeMonth}
                  value={month}
                ></StyledInput>
                <SubmitBtn color={theme.color.navy} type="submit">
                  전송
                </SubmitBtn>
              </DateModalForm>
            </div>
          </div>
        </>
      )}
    </DateModalBlock>
  );
};

export default DateModal;
