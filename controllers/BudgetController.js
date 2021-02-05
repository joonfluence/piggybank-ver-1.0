import Budget from "../models/Budget.js";

export const postBudgetInfo = async (req, res) => {
  const { category, title, budget } = req.body;
  const { _id } = req.user;
  try {
    // monthlyBudget은 삭제하고 항목별 budget의 합으로 값을 저장해주자.
    const newBudget = await Budget.create({
      user: [_id],
      title,
      budget,
      category,
    });
    return res.status(201).json(newBudget);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false });
  }
};

export const getBudgetInfo = async (req, res) => {
  const { _id } = req.user;
  try {
    const budgetInfo = await Budget.find({ user: [_id] }, (err, budget) => {
      if (err) return res.status(404).json({ success: false });
    });
    return res.status(200).json(budgetInfo);
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
    return res.status(200).json(newInfo);
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
    return res.status(200).json(BudgetInfo);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ sucess: false, error });
  }
};

export const getBudgetMonth = async (req, res) => {
  const {
    params: { year, month },
  } = req;

  try {
    const nextMonthInt = Number(month) + 1;
    const nextMonth =
      nextMonthInt.toString() < 10
        ? 0 + nextMonthInt.toString()
        : nextMonthInt.toString();

    // monthInfo < 데이터 < monthInfo + 1와 같은 방식으로 월별 데이터를 가져올 수 있을 것.

    const monthlyBudget = await Budget.find({
      date: {
        $gt: new Date(`${year}-${month}-01T00:00:00.000Z`),
        $lt: new Date(`${year}-${nextMonth}-01T00:00:00.000Z`),
      },
    });

    return res.status(200).json(monthlyBudget);
  } catch (err) {
    return res.status(500).json(err);
  }
};
