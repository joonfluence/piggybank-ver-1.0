import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createPaying } from "../actions/payingActions";
import { createSaving } from "../actions/savingActions";
import { COLORS } from "./GlobalStyles";

const CreateBoardBlock = styled.section`
  margin: 0 auto;
  width: 50%;
`;

const FormTitle = styled.h1`
  font-size: 28px;
  font-weight: 600;
`;

const CreateFormBlock = styled.form`
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
`;

const FormInputContainer = styled.div`
  margin: 0 auto;
`;

const FormInput = styled.input`
  border: 1px solid black;
  width: 364px;
  height: 3rem;

  &::placeholder {
    font-size: 1.2rem;
  }

  &:last-child {
    cursor: pointer;
  }
`;

const FormSelect = styled.select`
  margin: 0 auto;
  border: 1px solid black;
  width: 364px;
  height: 3rem;
`;

const IconContainer = styled.div`
  svg {
    border-radius: 20px;
    background-color: ${(props) => props.color};
    color: white;
    font-size: 2.5rem;
    &:hover {
      cursor: pointer;
    }
  }
`;

const CreateBoard = ({
  InfoName,
  isPaying,
  selectOptions,
  dataList,
  isOpen,
}) => {
  const { userInfo } = useSelector(({ userReducer }) => ({
    userInfo: userReducer.user,
  }));
  const dispatch = useDispatch();
  const [open, setOpen] = useState(isOpen);
  const [name, setName] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [category, setCategory] = useState("");
  const [selectedOption, setSelectedOption] = useState("소비");
  const [createdDate, setcreatedDate] = useState("");
  const onButtonClick = () => setOpen(!open);

  const onChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePrice = (e) => {
    setInputPrice(e.target.value);
  };

  const onChangeDate = (e) => {
    setcreatedDate(e.target.value);
  };

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let body = {
      user: userInfo,
      date: createdDate,
      category: category,
      title: name,
      price: inputPrice,
    };
    if (selectedOption === "소비") {
      dispatch(createPaying(body));
    } else if (selectedOption === "저축") {
      dispatch(createSaving(body));
    }
    setName("");
    setInputPrice("");
    setcreatedDate("");
  };

  const year = new Date().getFullYear();
  const date = new Date().getMonth() + 1;

  return (
    <>
      <IconContainer color={COLORS.navy} onClick={onButtonClick} open={open}>
        <AiOutlinePlus />
      </IconContainer>
      {open && (
        <CreateBoardBlock>
          <FormTitle>
            {year}년 {date}월 {InfoName}정보
          </FormTitle>
          <CreateFormBlock onSubmit={onSubmit}>
            <FormInputContainer>
              <FormInput
                onChange={onChangeName}
                placeholder={InfoName + "명"}
                value={name}
                required
              ></FormInput>
            </FormInputContainer>
            <FormInputContainer>
              <FormInput
                onChange={onChangePrice}
                placeholder={InfoName + "액"}
                value={inputPrice}
                required
              ></FormInput>
            </FormInputContainer>
            <FormSelect value={category} onChange={onChangeCategory}>
              <option>카테고리</option>
              {selectOptions ? (
                selectOptions.map((data) => (
                  <option value={data._id}>{data.title}</option>
                ))
              ) : (
                <></>
              )}
            </FormSelect>
            <FormInputContainer>
              <FormInput
                onChange={onChangeDate}
                type="date"
                value={createdDate}
                required
              ></FormInput>
            </FormInputContainer>
            <FormInputContainer>
              {isPaying ? (
                <>
                  <FormInput
                    style={{ width: "30px" }}
                    id="CS"
                    onChange={handleRadioChange}
                    type="radio"
                    checked={selectedOption === "소비"}
                    value="소비"
                    required
                  ></FormInput>
                  <label htmlFor="CS">소비 </label>
                </>
              ) : (
                <>
                  <FormInput
                    style={{ width: "30px" }}
                    id="SV"
                    onChange={handleRadioChange}
                    type="radio"
                    checked={selectedOption === "저축"}
                    value="저축"
                    required
                  ></FormInput>
                  <label htmlFor="SV">저축 </label>
                </>
              )}
            </FormInputContainer>
            <FormInputContainer>
              <FormInput type="submit" value="전송하기"></FormInput>
            </FormInputContainer>
          </CreateFormBlock>
        </CreateBoardBlock>
      )}
    </>
  );
};

export default CreateBoard;
