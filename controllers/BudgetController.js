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
export const getBudgetMonth = (req, res) => res.send("budgetMonth");
