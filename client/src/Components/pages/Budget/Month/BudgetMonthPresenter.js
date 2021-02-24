import React from 'react';
import styled from 'styled-components';
import CenterButton from "../../../CenterButton";
import ContentHeader from "../../../ContentHeader";
import ContentBody from "../../../ContentBody";
import Header from "../../../Header";
import Nav from "../../../Nav";

const BudgetMonthPresenterBlock = styled.div``;

const BudgetMonthBlock = styled.div`
  background-color: white;
`;

const BudgetMonthPresenter = ({children, year, month}) => {
    return (
        <BudgetMonthPresenterBlock>
            <Nav></Nav>
            <Header HeaderInfo="월 지출"></Header>
            <CenterButton />
            <BudgetMonthBlock>
                {children}
                <ContentHeader year={year} month={month}></ContentHeader>
                <ContentBody></ContentBody>
            </BudgetMonthBlock>
        </BudgetMonthPresenterBlock>
    );
};

export default BudgetMonthPresenter;