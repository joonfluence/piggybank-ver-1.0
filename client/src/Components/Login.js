import React from 'react';
import styled from 'styled-components';
import {AiFillFacebook, AiFillLock} from 'react-icons/ai';
import {RiKakaoTalkFill} from 'react-icons/ri';
import {BsFillPersonFill} from 'react-icons/bs';

const LoginBlock = styled.div`
    margin-top : 6rem;
    margin-left: auto;
    margin-right: 2rem;
    max-width: 364px;
`;

const Input = styled.input`
    background: none;
    border: none;
    outline: none;
    flex: 1;
    height: 3rem;
    font-size: 1.2rem;

    &::placeholder {
    }
`

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1.5px solid black;
    
    svg {
        font-size: 1.7rem;
    }

`;

const Button = styled.button`
    background: blue;
    border: none;
    outline: none;
    margin: 7px;
    padding: 10px;
    border-radius: 10px;
    width: 6rem;
    flex: 1;
`;

const ButtonContainer = styled.div`
    display: flex;
`;

const SocialLoginBlock = styled.div`
    .fb-icon {
        color: #3A559F;
    }
    .kk-icon {
        color: #391B1B;
        background-color: yellow;
    }
    svg {
        font-size: 2rem;
        margin: 5px;
    }
`;

const Login = () => {
    return (
        <LoginBlock>
            <InputContainer>
                <BsFillPersonFill />
                <Input placeholder="username111@gmail.com">
                </Input> 
            </InputContainer>
            <InputContainer>
                <AiFillLock />
                <Input placeholder="비밀번호를 입력하세요"></Input> 
            </InputContainer>
            <ButtonContainer>
                <Button>로그인</Button>
                <Button>회원가입</Button>
            </ButtonContainer>
            <SocialLoginBlock>
                <AiFillFacebook className="fb-icon"/>
                <RiKakaoTalkFill className="kk-icon"/>
            </SocialLoginBlock>
        </LoginBlock>
    );
};

export default Login;