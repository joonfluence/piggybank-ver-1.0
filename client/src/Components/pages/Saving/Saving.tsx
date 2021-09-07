import React from "react";
import { useSelector } from "react-redux";
import Auth from "../../../Hoc/auth";
import styled from "styled-components";
import Header from "../../common/Header";
import CenterButton from "../../common/CenterButton";
import { Helmet } from "react-helmet";
import Footer from "../../common/Footer";
import CreateBoard from "../../common/CreateBoard";
import CreateList from "../../common/CreateList";
import theme from "../../../Style/theme";

const SavingBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  .content {
    background-color: ${(props) => props.theme.color.white};
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;
  }
`;

const Saving = () => {
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
      <Header />
      <CenterButton />
      <div className="content">
        <CreateBoard
          isSaving={true}
          InfoName="저축"
          selectOptions={monthlySavingGoal}
        />
        <CreateList
          color={theme.color.apricot}
          isPaying={false}
          dataList={savingList}
          isCategory={true}
        />
      </div>
      <Footer />
    </SavingBlock>
  );
};

export default Auth(Saving, true);
