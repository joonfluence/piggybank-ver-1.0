import React from "react";
import styled from 'styled-components';
import SavingPresenter from "./SavingPresenter";

const SavingContainerBlock = styled.div`

`;

const SavingContainer = () => {
    return (
        <SavingContainerBlock>
            <SavingPresenter></SavingPresenter>
        </SavingContainerBlock>
    );
};

export default SavingContainer;