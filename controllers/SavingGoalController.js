import SavingGoal from "../models/SavingGoal.js";

export const postGoalInfo = async (req, res) => {
  const { title, goalPrice, remained } = req.body;
  const { _id } = req.user;
  try {
    // monthlyBudget은 삭제하고 항목별 budget의 합으로 값을 저장해주자.
    const newSavingGoal = await SavingGoal.create({
      user: [_id],
      title,
      goalPrice,
      remained,
    });
    return res.status(201).json(newSavingGoal);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false });
  }
};

export const getGoalInfo = async (req, res) => {
  const { _id } = req.user;
  try {
    const savingGoalInfo = await SavingGoal.find(
      { user: [_id] },
      (err, goal) => {
        if (err) return res.status(404).json({ success: false });
      }
    );
    return res.status(200).json(savingGoalInfo);
  } catch (error) {
    // console.log(error);
    return res.status(500).json({ error });
  }
};

export const editGoalInfo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const newSavingGoalInfo = await SavingGoal.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      },
      (err, info) => {
        if (err) return res.status(404).json({ error: "Not Found" });
      }
    );
    return res.status(200).json(newSavingGoalInfo);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ sucess: false, error });
  }
};

export const deleteGoalInfo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await SavingGoal.findByIdAndRemove({ _id: id });
    return res.status(204).json();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ sucess: false, error });
  }
};

export const getGoalDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const savingGoalInfo = await SavingGoal.findById({ _id: id });
    return res.status(200).json(savingGoalInfo);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ sucess: false, error });
  }
};

export const getGoalMonth = async (req, res) => {
  const { year, month } = req.body;
  const { _id } = req.user;

  try {
    const newMonth =
      month.toString().length < 2 ? 0 + month.toString() : month.toString();
    const nextMonthInt = Number(month) + 1;
    const nextMonth =
      nextMonthInt.toString().length < 2
        ? 0 + nextMonthInt.toString()
        : nextMonthInt.toString();

    // monthInfo < 데이터 < monthInfo + 1와 같은 방식으로 월별 데이터를 가져올 수 있을 것.

    const monthlySavingGoal = await SavingGoal.find({
      user: [_id],
      date: {
        $gt: new Date(`${year}-${newMonth}-01T00:00:00.000Z`),
        $lt: new Date(`${year}-${nextMonth}-01T00:00:00.000Z`),
      },
    });

    let SavingGoalSum = 0;

    for (let i = 0; i < monthlySavingGoal.length; i++) {
      let temp = 0;
      temp = monthlySavingGoal[i].budget;
      SavingGoalSum += temp;
    }

    return res
      .status(200)
      .json({ monthlySavingGoal, SavingGoalSum, monthSuccess: true });
  } catch (err) {
    return res.status(500).json(err);
  }
};
