import Paying from "../models/Paying.js";

// 3) 소비정보 CRUD Controller

export const postPayingInfo = async (req, res) => {
  const { user, category, title, price } = req.body;
  try {
    const newPaying = await Paying.create({
      user,
      category,
      title,
      price,
    });
    return res.status(201).json(newPaying);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error });
  }
};

export const getPayingInfo = async (req, res) => {
  const { _id } = req.user;
  console.log(req.user);
  try {
    const userInfo = await Paying.find({ user: [_id] });
    return res.status(200).json({ success: true, userInfo });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

export const editPayingInfo = async (req, res) => {
  // id를 통해 해당 소비내역 정보가 전달되어야 할 것임.
  const {
    params: { id },
  } = req;
  try {
    const payingInfo = await Paying.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      },
      (err, info) => {
        if (err) return res.status(404).json({ error: "Not Found" });
      }
    );
    return res.status(200).json(payingInfo);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ sucess: false, error });
  }
};

export const deletePayingInfo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await Paying.findByIdAndRemove({ _id: id });
    return res.status(204).json();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ sucess: false, error });
  }
};

export const getPayingDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const payInfo = await Paying.findById({ _id: id });
    return res.status(200).json(payInfo);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ sucess: false, error });
  }
};

// 사용자가 입력한 숫자가 02와 같은 형식이 아닐 경우, 예외처리가 필요할 것임.

export const getPayingMonth = async (req, res) => {
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

    const monthlyPaying = await Paying.find({
      date: {
        $gt: new Date(`${year}-${month}-01T00:00:00.000Z`),
        $lt: new Date(`${year}-${nextMonth}-01T00:00:00.000Z`),
      },
    });

    let temp = 0;
    let payingSum = 0;
    let categorySum = 0;
    // 나중에는 사용자의 input value를 바탕으로 값을 받아줄 것임.
    let category = "과자";

    const categoryPaying = await Paying.find({
      title: `${category}`,
      date: {
        $gt: new Date(`${year}-${month}-01T00:00:00.000Z`),
        $lt: new Date(`${year}-${nextMonth}-01T00:00:00.000Z`),
      },
    }).populate("category", "title budget");

    // 카테고리의 합을 나타내야 할 것임.

    for (let i = 0; i < monthlyPaying.length; i++) {
      temp = monthlyPaying[i].price;
      payingSum += temp;
    }

    for (let i = 0; i < categoryPaying.length; i++) {
      temp = categoryPaying[i].price;
      categorySum += temp;
    }

    console.log("payingSum :" + payingSum);
    console.log("categorySum :" + categorySum);

    return res.status(200).json({ monthSucess: true, payingSum, categorySum });
  } catch (error) {
    return res.status(500).json(error);
  }
};
