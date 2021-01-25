import React from "react";
import styled from 'styled-components';
import MyPagePresenter from "./MyPagePresenter";

const MyPageContainerBlock = styled.div`

`;

const MyPageContainer = () => {
    return (
        <MyPageContainerBlock>
            <MyPagePresenter></MyPagePresenter>
        </MyPageContainerBlock>
    );
};

export default MyPageContainer;