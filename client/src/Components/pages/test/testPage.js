import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getTestInfo } from "../../../hoc/test";

const TestPageBlock = styled.div`
  background-color: white;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TestPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTestInfo());
  }, [dispatch]);

  return (
    <TestPageBlock>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
      tempore saepe optio necessitatibus earum voluptatum iusto praesentium nemo
      adipisci excepturi voluptas ipsa repellat reiciendis, dignissimos enim,
      est iure recusandae nisi.
    </TestPageBlock>
  );
};

export default React.memo(TestPage);
