import React from "react";
import styled from "styled-components";
import { COLORS } from "./GlobalStyles";
import { BsCheckCircle } from "react-icons/bs";
import { RiDeleteBack2Fill } from "react-icons/ri";
import CategoryBlock from "./visuals/CategoryBlock";

const CreateListBlock = styled.div`
  padding-bottom: 1rem;
`;

const InputContentBlock = styled.div`
  background-color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  & > div > svg {
    cursor: pointer;
  }
`;

const BackgroundBlock = styled.div`
  display: flex;
  width: 80%;
  margin: 3rem;
  background-color: ${(props) => props.color};

  & > div:last-child() {
    flex: 1;
    font-size: 1.5rem;
  }
`;

const CreateList = ({ dataList }) => {
  return (
    <CreateListBlock>
      <InputContentBlock color={COLORS.pink}>
        {dataList ? (
          dataList.map((data) => (
            <BackgroundBlock color={COLORS.white}>
              <div>
                <CategoryBlock
                  data={data}
                  color={COLORS.skyblue}
                  isCategory={data.category ? true : false}
                />
              </div>
              <div>
                <span>{data.price}</span>
                <span>{data.memo}</span>
                <BsCheckCircle />
                <RiDeleteBack2Fill />
              </div>
            </BackgroundBlock>
          ))
        ) : (
          <div>empty</div>
        )}
      </InputContentBlock>
    </CreateListBlock>
  );
};

export default CreateList;
