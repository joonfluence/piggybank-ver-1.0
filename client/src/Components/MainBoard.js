import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
    padding-top : 50px;
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