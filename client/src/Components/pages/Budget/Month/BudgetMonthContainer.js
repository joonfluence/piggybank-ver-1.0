import React, { useState } from 'react';
import styled from 'styled-components';
import DateModal from '../../../../utils/DateModal';
import BudgetMonthPresenter from './BudgetMonthPresenter';

const BudgetMonthContainerBlock = styled.div``;

const BudgetMonthContainer = () => {
    // useSelector를 통해, 변경된 데이터를 보내주는 형태가 될 것임. 
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <BudgetMonthContainerBlock>
            <BudgetMonthPresenter year={year} month={month}>
                <DateModal year={year} month={month} modalOpen= {modalOpen} setYear={setYear} setMonth={setMonth} setModalOpen={setModalOpen}/>
            </BudgetMonthPresenter>
        </BudgetMonthContainerBlock>
    );
};

export default BudgetMonthContainer;
