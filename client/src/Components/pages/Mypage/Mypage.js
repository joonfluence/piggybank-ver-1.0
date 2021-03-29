import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import DateModal from "../../common/DateModal";
import MonthDataList from "../../charts/MonthDataList";
import PieTotalRatio from "../../charts/PieTotalRatio";
import { monthBudget } from "../../../redux/actions/budgetActions";
import { monthPaying } from "../../../redux/actions/payingActions";
import { monthSaving } from "../../../redux/actions/savingActions";
import { monthSavingGoal } from "../../../redux/actions/savingGoalActions";
import theme from "../../../Style/theme";
import Footer from "../../Footer";

const MypageBlock = styled.div`
  position: relative;
  background-color: white;
`;

const UserBlock = styled.div`
  padding-top: 6rem;
  height: 10vh;
`;

const DataBlock = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  & > div:last-child {
    position: absolute;
    top: 10%;
    right: 0%;

    & > button {
      width: 6rem;
      height: 3rem;
      border-radius: 10px;
    }
  }
`;
const ChartBlock = styled.div`
  width: 20rem;
  height: 20rem;
  margin: 3rem;
  & > span {
    font-weight: 600;
    font-size: 1rem;
    margin: 3rem;
  }
`;

const ColumnBlock = styled.div`
  display: flex;
  flex-direction: column;
  &:last-child() {
    position: absolute;
  }
`;

const Mypage = () => {
  const { budgetSum, monthlyBudget, budgetCategorySum } = useSelector(
    ({ budgetReducer }) => ({
      budgetSum: budgetReducer.budgetSum,
      monthlyBudget: budgetReducer.monthlyBudget,
      budgetCategorySum: budgetReducer.categorySum,
    })
  );

  const {
    savingGoalSum,
    monthlySavingGoal,
    savingGoalCategorySum,
  } = useSelector(({ savingGoalReducer }) => ({
    savingGoalSum: savingGoalReducer.savingGoalSum,
    monthlySavingGoal: savingGoalReducer.monthlySavingGoal,
    savingGoalCategorySum: savingGoalReducer.categorySum,
  }));
  const { yearInfo, monthInfo } = useSelector(({ dateReducer }) => ({
    yearInfo: dateReducer.yearInfo,
    monthInfo: dateReducer.monthInfo,
  }));

  const { userName } = useSelector(({ userReducer }) => ({
    userName: userReducer.user.name,
  }));

  const payingData = [
    {
      id: "총 소비액수",
      value: budgetCategorySum, // 전체 소비액
      color: "hsl(181, 70%, 50%)", // 카테고리 색상
    },
    {
      id: "남은 예산",
      value: savingGoalSum - budgetCategorySum,
      color: "hsl(236, 70%, 50%)",
    },
  ];

  const savingData = [
    {
      id: "총 저축액수",
      value: savingGoalCategorySum, // 전체 소비액
      color: "hsl(181, 70%, 50%)", // 카테고리 색상
    },
    {
      id: "남은 저축목표액",
      value: savingGoalSum - savingGoalCategorySum,
      color: "hsl(236, 70%, 50%)",
    },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    let body = {
      year: yearInfo,
      month: monthInfo,
    };
    async function fetchPageData() {
      await dispatch(monthBudget(body));
      await dispatch(monthPaying(body));
      await dispatch(monthSaving(body));
      await dispatch(monthSavingGoal(body));
    }
    fetchPageData();
  }, [yearInfo, monthInfo]);

  return (
    <MypageBlock>
      <UserBlock>
        <h2>
          {userName}님의 {monthInfo}월 지출/저축 정보입니다
        </h2>
      </UserBlock>
      <DataBlock>
        <ColumnBlock>
          {monthlyBudget !== null ? (
            <MonthDataList
              isBudget={true}
              monthlyData={monthlyBudget}
              isCategory={false}
              color={theme.color.apricot}
            />
          ) : (
            <></>
          )}
          {monthlySavingGoal !== null ? (
            <MonthDataList
              isBudget={false}
              monthlyData={monthlySavingGoal}
              isCategory={false}
              color={theme.color.pink}
            />
          ) : (
            <></>
          )}
        </ColumnBlock>
        <ColumnBlock>
          {budgetCategorySum === 0 && budgetSum === 0 ? (
            <></>
          ) : (
            <>
              <ChartBlock>
                <span>예산/지출액</span>
                <PieTotalRatio data={payingData} color="set1" />
                <p>
                  {`소비율 ` +
                    Math.floor(
                      (1 - (budgetSum - budgetCategorySum) / budgetSum) * 100,
                      2
                    ) +
                    `%`}
                </p>
              </ChartBlock>
            </>
          )}
          <ChartBlock>
            {budgetCategorySum === 0 && budgetSum === 0 ? (
              <></>
            ) : (
              <>
                <span>목표액/저축액</span>
                <PieTotalRatio data={savingData} color="set1" />
                <p>
                  {`달성률 ` +
                    Math.floor(
                      (1 -
                        (savingGoalSum - savingGoalCategorySum) /
                          savingGoalSum) *
                        100,
                      2
                    ) +
                    `%`}
                </p>
              </>
            )}
          </ChartBlock>
        </ColumnBlock>
        <div>
          <DateModal />
        </div>
      </DataBlock>
      <Footer />
    </MypageBlock>
  );
};

export default Mypage;
