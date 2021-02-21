import Paying from "../models/Paying.js";
import Budget from "../models/Budget.js";

export const getPayingCategory = async (req, res) => {
  const {
    query: { year, month },
    params: { category },
  } = req;
  try {
    const nextMonthInt = Number(month) + 1;
    const nextMonth =
      nextMonthInt.toString() < 10
        ? 0 + nextMonthInt.toString()
        : nextMonthInt.toString();

    let temp = 0;
    let payingSum = 0;
    let categorySum = 0;
    // 나중에는 사용자의 input value를 바탕으로 값을 받아줄 것임.

    const categoryPaying = await Paying.find({
      title: `${category}`,
      date: {
        $gt: new Date(`${year}-${month}-01T00:00:00.000Z`),
        $lt: new Date(`${year}-${nextMonth}-01T00:00:00.000Z`),
      },
    }).populate("category", "title budget");

    // 카테고리의 합을 나타내야 할 것임.

    for (let i = 0; i < categoryPaying.length; i++) {
      temp = categoryPaying[i].price;
      categorySum += temp;
    }

    console.log("categorySum :" + categorySum);

    return res.status(200).json({ monthSucess: true, categorySum });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getSavingCategory = (req, res) => res.send("getSavingCategory");

export const getBudgetCategory = async (req, res) => {
  const { year, month } = req.query;
  const { category } = req.params;

  try {
    const nextMonthInt = Number(month) + 1;
    const nextMonth =
      nextMonthInt.toString() < 10
        ? 0 + nextMonthInt.toString()
        : nextMonthInt.toString();

    // monthInfo < 데이터 < monthInfo + 1와 같은 방식으로 월별 데이터를 가져올 수 있을 것.

    let temp = 0;
    let budget = 0;
    let categorySum = 0;

    const categoryBudget = await Budget.find({
      title: `${category}`,
      date: {
        $gt: new Date(`${year}-${month}-01T00:00:00.000Z`),
        $lt: new Date(`${year}-${nextMonth}-01T00:00:00.000Z`),
      },
    });

    return res.status(200).json({ categoryBudget });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
};
export const getSavingGoalCategory = (req, res) =>
  res.send("getSavingGoalCategory");
