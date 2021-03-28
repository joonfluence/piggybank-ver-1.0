import React, { useEffect } from 'react';
import styled from 'styled-components';
import Auth from "../../../hoc/auth";
import { useSelector, useDispatch } from "react-redux";
import CenterButton from "../../CenterButton";
import Header from "../../Header";
import { Helmet } from "react-helmet";
import Footer from "../../Footer";
import CreateBoard from "../../CreateBoard";
import CreateList from "../../CreateList";
import { readPaying } from "../../../redux/actions/payingActions";

const PayingBlock = styled.div`
    .content {
        background-color: ${props => props.theme.color.white};
    }
`;

const Paying = () => {

    const { payingList } = useSelector(({ payingReducer }) => ({
        payingList: payingReducer.payingList,
    }));

    const { userInfo } = useSelector(({ userReducer }) => ({
        userInfo: userReducer.userId,
      }));
    
    const { monthlyBudget } = useSelector(({ budgetReducer }) => ({
        monthlyBudget: budgetReducer.monthlyBudget,
    }));
    
    const dispatch = useDispatch();
    
    useEffect(() => {
    dispatch(readPaying());
    }, []);
      
    return (
    <PayingBlock>
        <Helmet>
            <meta charSet="utf-8" />
            <title>지출관리 | 돼지저금통</title>
        </Helmet>
        <div>
            <Header></Header>
            <CenterButton />
            <div className="content">
                <CreateBoard
                userInfo={userInfo}
                dataList={payingList}
                isPaying={true}
                InfoName="소비"
                isOpen={true}
                title="소비내역"
                selectOptions={monthlyBudget}
                />
                <CreateList isPaying={true} dataList={payingList} isCategory={true} />
            </div>
        </div>
        <Footer />
    </PayingBlock>
    );
};

export default Auth(Paying, true);