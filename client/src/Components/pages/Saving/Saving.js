import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import Header from "../../Header";
import CenterButton from "../../CenterButton";
import { Helmet } from "react-helmet";
import Footer from "../../Footer";
import CreateBoard from "../../CreateBoard";
import CreateList from "../../CreateList";
import theme from '../../../Style/theme';

const SavingBlock = styled.div`
    .content {
        background-color: ${props => props.theme.color.white};
    }
`;

const Saving = () => {
    const dispatch = useDispatch();
    const { monthlySavingGoal } = useSelector(({ savingGoalReducer }) => ({
        monthlySavingGoal: savingGoalReducer.monthlySavingGoal,
    }));
    const { savingList } = useSelector(({ savingReducer }) => ({
        savingList: savingReducer.savingList,
      }));
    return (
        <SavingBlock>
            <Helmet>
                <meta charSet="utf-8" />
                <title>저축관리 | 돼지저금통</title>
            </Helmet>
            <div>
                <Header />
                <CenterButton />
                <div className="content">
                    <CreateBoard
                    dataList={savingList}
                    isPaying={false}
                    InfoName="저축"
                    isOpen={true}
                    title="저축내역"
                    selectOptions={monthlySavingGoal}
                    ></CreateBoard>
                    <CreateList color={theme.color.apricot} isPaying={false} dataList={savingList} isCategory={true} />
                </div>
            </div>
            <Footer />
        </SavingBlock>
    );
};

export default Saving;