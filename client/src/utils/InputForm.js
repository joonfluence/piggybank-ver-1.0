import React from 'react';
import styled from 'styled-components';

const InputFormBlock = styled.div`
    background-color: white;
    margin: 0 auto;
    position: absolute;
    left: 10%;
    top: 150px;
    width: 60%;
    height: 60vh;
`;

const LoginFormBlock = styled.div`
    border: 1px solid black;
    margin: 1.5rem auto 0 auto;
    width: 60%;
`;

const LoginForm = styled.form`
`;

const InputContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
`;

const Input = styled.input`
    border: 1px solid black;
`;



const InputForm = () => {
    return (
        <InputFormBlock>
        <LoginFormBlock>
            <h1>
                회원가입
            </h1>
            <LoginForm>
                <InputContainer>
                    <label htmlFor="name">이름</label>
                    <Input id="name" type="name" placeholder="홍길동" />
                </InputContainer>
                <InputContainer>
                    <label htmlFor="ID">아이디</label>
                    <Input id="ID" type="id" placeholder="helloworld" />
                </InputContainer>
                <InputContainer>
                    <label htmlFor="password">비밀번호</label>
                    <Input id="password" type="password" placeholder="Password"/>
                </InputContainer>
                <InputContainer>
                    <label htmlFor="password2">비밀번호 확인</label>
                    <Input id="password2" type="password" placeholder="Password Confirm"/>
                </InputContainer>
                <InputContainer>
                    <label htmlFor="email">이메일</label>
                    <Input id="email" type="email" placeholder="Email"/>
                </InputContainer>
                <Input type="submit" />
            </LoginForm>
        </LoginFormBlock>
        </InputFormBlock>
    );
};

export default InputForm;