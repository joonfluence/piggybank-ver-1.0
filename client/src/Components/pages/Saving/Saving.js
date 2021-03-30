import React from "react";
import { useSelector } from "react-redux";
import Auth from "../../../hoc/auth";
import styled from "styled-components";
import Header from "../../Header";
import CenterButton from "../../CenterButton";
import { Helmet } from "react-helmet";
import Footer from "../../Footer";
import CreateBoard from "../../CreateBoard";
import CreateList from "../../CreateList";
import theme from "../../../Style/theme";

const SavingBlock = styled.div`
  .content {
    background-color: ${(props) => props.theme.color.white};
    display: flex;
    flex-direction: column;
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
      <div>
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
      </div>
      <Footer />
    </SavingBlock>
  );
};

export default Auth(Saving, true);
