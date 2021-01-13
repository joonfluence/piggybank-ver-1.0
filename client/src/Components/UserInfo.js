import React from "react";
import styled from "styled-components";

const UserInfoContainer = styled.article `
    position: absolute;
    width: 300px;
    height: 200px;
    top: 20%;
    right: 0;
    background-color: grey;
`;

const UserProfileImg = styled.div`
    background: url('http://placehold.it/64/64') no-repeat;
    background-size : 100% 100%;
    margin : 10px auto;
    width: 100px;
    height: 100px;
`;

const Title = styled.h1`

`;

export default () => {
    return (
        <UserInfoContainer>
            <UserProfileImg>
            </UserProfileImg>
            <Title>이준호</Title>
            <Title>950624</Title>
            <Title>목표금액</Title>
            <Title>목표예산</Title>
        </UserInfoContainer>
        )   
};