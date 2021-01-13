import React from "react";
import styled from "styled-components";

const MainContainer = styled.section`
    padding-top : 50px;
    height: 300px;
    background-color : darkgreen;
`;

export default () => {
    return (
        <>
            <MainContainer>
                <h1>유저의 달성률 정보입니다</h1>
            </MainContainer>
        </>
    )
}