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
      {/* 아예 category 정보가 없는 데이터도 있으므로 db를 전부 삭제해주고 새로 다시 채울 것 */}
      {isCategory && data.category[0] ? (
        <span> 카테고리 : {data.category[0].title}</span>
      ) : (
        <span></span>
      )}
    </CategoryBlockBlock>
  );
};

export default CategoryBlock;
