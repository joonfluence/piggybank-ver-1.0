import axios from "axios";
import React from "react";
import styled from "styled-components";

const TestPageBlock = styled.div`
  background-color: white;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TestPage = () => {
  axios.post("http://localhost:5000/test", {}, { withCredentials: true });

  return (
    <TestPageBlock>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
      tempore saepe optio necessitatibus earum voluptatum iusto praesentium nemo
      adipisci excepturi voluptas ipsa repellat reiciendis, dignissimos enim,
      est iure recusandae nisi.
    </TestPageBlock>
  );
};

export default TestPage;
