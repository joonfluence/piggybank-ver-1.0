import React, { useEffect } from "react";
import styled from "styled-components";
import { RiDeleteBack2Fill } from "react-icons/ri";
import CategoryBlock from "./visuals/CategoryBlock";
import { useDispatch } from "react-redux";
import { deleteSaving, readSaving } from "../redux/actions/savingActions";
import { deletePaying, readPaying } from "../redux/actions/payingActions";
import theme from "../Style/theme";

const CreateListBlock = styled.div``;

const InputContentBlock = styled.div`
  background-color: ${(props) => props.theme.color.pink};
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin: 3rem; */
  & > div > svg {
    cursor: pointer;
  }
`;

const PriceBlock = styled.div`
  display: flex;
  align-items: center;
  width: 80%;

  & > div:nth-child(2) {
    flex: 1;
    font-size: 2rem;
    & > p {
      font-size: 1rem;
    }
  }

  /* 이모티콘들 */
  & > div:nth-child(3) > div {
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    margin: 1.5rem;
  }
`;

const BackgroundBlock = styled.div`
  display: flex;
  width: 80%;
  margin: 3rem;
  background-color: ${(props) => props.theme.color.white};

  & > div:last-child() {
    flex: 1;
    font-size: 1.5rem;
  }
`;

const CreateList = ({ dataList, color, isCategory, isPaying }) => {
  const dispatch = useDispatch();
  async function fetchSavingData() {
    await dispatch(readSaving());
  }

  async function fetchPayingData() {
    await dispatch(readPaying());
  }

  useEffect(() => {
    fetchSavingData();
  }, [dataList.length]);

  useEffect(() => {
    fetchPayingData();
  }, [dataList.length]);

  const onDelete = (id) => {
    if (isPaying) {
      dispatch(deletePaying(id)).then((response) => {
        if (response.payload.data.sucess) {
          alert("삭제되었습니다.");
        }
      });
    } else {
      dispatch(deleteSaving(id)).then((response) => {
        if (response.payload.data.sucess) {
          alert("삭제되었습니다.");
        }
      });
    }
    fetchSavingData();
    fetchPayingData();
  };

  return (
    <CreateListBlock>
      <InputContentBlock>
        {dataList ? (
          dataList.map((data) => (
            <BackgroundBlock>
              <CategoryBlock
                color={color}
                data={data}
                isCategory={isCategory}
              />
              <PriceBlock>
                <div>생성일 : {data.date}</div>
                <div>
                  <span>{data.price + `원`}</span>
                  {data.memo ? <p> data.memo </p> : <p></p>}
                </div>
                <div>
                  <div>
                    <RiDeleteBack2Fill onClick={() => onDelete(data._id)} />
                  </div>
                </div>
              </PriceBlock>
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
