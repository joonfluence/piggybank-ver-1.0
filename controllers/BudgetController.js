import Budget from "../models/Budget.js";

export const postBudgetInfo = async (req, res) => {
  const { title, budget, monthlyBudget } = req.body;
  const { _id } = req.user;
  try {
    // monthlyBudget은 삭제하고 항목별 budget의 합으로 값을 저장해주자.
    const newBudget = await Budget.create({
      user: [_id],
      title,
      budget,
      monthlyBudget,
    });
    return res.status(201).json({ CreateSuccess: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ CreateSuccess: false });
  }
};

// 아래 요소를 바꿔주어야 할 것이다.

export const getBudgetInfo = async (req, res) => {
  const { _id } = req.user;
  try {
    const budgetInfo = await Budget.find(
      { user: [_id] },
      { title: 1, budget: 1 },
      (err, budget) => {
        if (err) return res.status(404).json({ ReadSuccess: false });
      }
    );

    return res.status(200).json({ budgetInfo, ReadSuccess: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};

export const editBudgetInfo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const newInfo = await Budget.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      },
      (err, info) => {
        if (err) return res.status(404).json({ error: "Not Found" });
      }
    );
    return res.status(200).json({ UpdateSuccess: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ UpdateSuccess: false, error });
  }
};

export const deleteBudgetInfo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await Budget.findByIdAndRemove({ _id: id });
    return res.status(204).json();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ sucess: false, error });
  }
};

export const getBudgetDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const BudgetInfo = await Budget.findById({ _id: id });
    return res.status(200).json({ DetailSuccess: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ DetailSuccess: false, error });
  }
};

export const getBudgetMonth = async (req, res) => {
  const { year, month } = req.params;

  try {
    const nextMonthInt = Number(month) + 1;
    const nextMonth =
      nextMonthInt.toString() < 10
        ? 0 + nextMonthInt.toString()
        : nextMonthInt.toString();

    // monthInfo < 데이터 < monthInfo + 1와 같은 방식으로 월별 데이터를 가져올 수 있을 것.

    let temp = 0;
    let budget = 0;
    let budgetSum = 0;
    let categorySum = 0;
    // 나중에는 사용자의 input value를 바탕으로 값을 받아줄 것임.
    let title = "의복비";

    const monthlyBudget = await Budget.find({
      date: {
        $gt: new Date(`${year}-${month}-01T00:00:00.000Z`),
        $lt: new Date(`${year}-${nextMonth}-01T00:00:00.000Z`),
      },
    });

    const categoryBudget = await Budget.find({
      title: `${title}`,
      date: {
        $gt: new Date(`${year}-${month}-01T00:00:00.000Z`),
        $lt: new Date(`${year}-${nextMonth}-01T00:00:00.000Z`),
      },
    });

    for (let i = 0; i < monthlyBudget.length; i++) {
      if (monthlyBudget[i].monthlyBudget) {
        budgetSum = monthlyBudget[i].monthlyBudget;
      }
      if (categoryBudget.length == 1) {
        budget = categoryBudget[0].budget;
      } else {
        temp = monthlyBudget[i].budget;
        categorySum += temp;
      }
    }

    return res.status(200).json({ budgetSum, monthSuccess: true });
  } catch (err) {
    return res.status(500).json({ err });
  }
};
