import React, { useEffect } from "react";
import styled from "styled-components";
import DateModal from "../../../../utils/DateModal";
import ContentHeader from "../../../ContentHeader";
import ContentBody from "../../../ContentBody";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { monthBudget } from "../../../../actions/budgetActions";
import { monthPaying } from "../../../../actions/payingActions";
import { COLORS } from "../../../GlobalStyles";

const BudgetMonthPresenterBlock = styled.div``;
const BudgetMonthBlock = styled.div`
  position: relative;
`;
const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const BudgetMonthPresenter = ({
  yearInfo,
  monthInfo,
  budgetSum,
  payingSum,
  pocketMoney,
  monthlyBudget,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    let body = {
      year: yearInfo,
      month: monthInfo,
    };
    async function fetchPageData() {
      await dispatch(monthBudget(body));
      await dispatch(monthPaying(body));
    }
    fetchPageData();
  }, [yearInfo, monthInfo]);

  return (
    <BudgetMonthPresenterBlock>
      <BudgetMonthBlock>
        <HeaderBlock>
          <ContentHeader
            yearInfo={yearInfo}
            monthInfo={monthInfo}
            used={payingSum}
            remained={pocketMoney}
            isBudget={true}
            budgetSum={budgetSum}
          ></ContentHeader>
          <DateModal />
        </HeaderBlock>
        <ContentBody
          budgetSum={budgetSum}
          monthlyData={monthlyBudget}
          used={payingSum}
          remained={pocketMoney}
          isBudget={true}
          color={COLORS.apricot}
        ></ContentBody>
      </BudgetMonthBlock>
    </BudgetMonthPresenterBlock>
  );
};

BudgetMonthPresenter.propTypes = {
  yearInfo: PropTypes.number,
  monthInfo: PropTypes.number,
  budgetSum: PropTypes.number,
  payingSum: PropTypes.number,
  pocketMoney: PropTypes.number,
  monthlyBudget: PropTypes.array,
};

export default BudgetMonthPresenter;
