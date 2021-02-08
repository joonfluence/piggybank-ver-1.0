import Saving from "../models/Saving.js";

// 4) 저축정보 CRUD Controller

export const postSavingInfo = async (req, res) => {
  const { category, title, price } = req.body;
  const { _id: userID } = req.user;
  try {
    const newSaving = await Saving.create({
      user: [userID],
      category, // :[categoryID]
      title,
      price,
    });
    return res.status(201).json(newSaving);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error });
  }
};

export const getSavingInfo = async (req, res) => {
  const { _id } = req.user;
  try {
    const userInfo = await Saving.find({ user: [_id] });
    return res.status(200).json(userInfo);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ sucess: false, error });
  }
};

export const editSavingInfo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const savingInfo = await Saving.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      },
      (err, info) => {
        if (err) return res.status(404).json({ error: "Not Found" });
      }
    );
    return res.status(200).json(savingInfo);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ sucess: false, error });
  }
};

export const deleteSavingInfo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await Saving.findByIdAndRemove({ _id: id });
    return res.status(204).json();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error });
  }
};

export const getSavingDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const savingInfo = await Saving.findById({ _id: id });
    return res.status(200).json(savingInfo);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ sucess: false, error });
  }
};

// 테스트가 요구됨.

export const getSavingMonth = async (req, res) => {
  const {
    params: { year, month },
  } = req;

  try {
    const nextMonthInt = Number(month) + 1;
    const nextMonth =
      nextMonthInt.toString() < 10
        ? 0 + nextMonthInt.toString()
        : nextMonthInt.toString();

    // 현재, 정기적금에 해당하는 title에 해당하는 요소만 바꿔준다.

    const categorySaving = await Saving.find({
      title: "정기적금",
      date: {
        $gt: new Date(`${year}-${month}-01T00:00:00.000Z`),
        $lt: new Date(`${year}-${nextMonth}-01T00:00:00.000Z`),
      },
    }).populate("category", "title goalPrice");

    return res.status(200).json(categorySaving);
  } catch (error) {
    return res.status(500).json(error);
  }
};
