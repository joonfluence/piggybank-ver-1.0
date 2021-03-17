import React from "react";
import styled from "styled-components";
import { GrMoney } from "react-icons/gr";

const CategoryBlockBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  width: 10rem;
  height: 10rem;
  background-color: ${(props) => props.color};
  border-radius: 1rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    background-color: white;
    width: 3rem;
    height: 3rem;
  }
`;

const CategoryBlock = ({ data, color, isCategory }) => {
  return (
    <CategoryBlockBlock color={color}>
      <div>
        <GrMoney />
      </div>
      <span>항목 : {data.title}</span>
      <span>금액 : {data.price}</span>
      {isCategory && data.category[0] ? (
        <span> 카테고리 : {data.category[0].title}</span>
      ) : (
        <span></span>
      )}
    </CategoryBlockBlock>
  );
};

export default CategoryBlock;
