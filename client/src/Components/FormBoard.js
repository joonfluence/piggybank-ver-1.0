import React from 'react';
import styled from 'styled-components';

const FormBoardBlock = styled.div`
  position: relative;
  background-color: white;
  margin-top: 2rem;
  /* max-width: 364px; */
`;

const FormHeader = styled.div``;

const FormContent = styled.div``;

const Form = styled.form``;

const Input = styled.input``;


const FormBoard = () => {
    const onSubmit = () => {};
    return (
        <FormBoardBlock>
          <FormHeader><h1>2월, 얼마나 쓰실 건가요?</h1></FormHeader>
          <FormContent>
            <Form onSubmit={onSubmit}>
              <Input type="text" placeholder="식비" />
              <Input type="text" placeholder="000원" />
              <Input type="submit" placeholder="추가하기" />
            </Form>
          </FormContent>
        </FormBoardBlock>
    );
};

export default FormBoard;