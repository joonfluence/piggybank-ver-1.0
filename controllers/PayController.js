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
    return res.json(newPaying);
  } catch (error) {
    return res.json({ sucess: false, error });
  }
};

export const getPayingInfo = async (req, res) => {
  const { _id } = req.user;
  // console.log(req.user);
  try {
    const newUser = await Paying.find({ user: [_id] });
    return res.json(newUser);
  } catch (error) {
    return res.json({ sucess: false, error });
  }
  // console.log(newUser);
};

export const editPayingInfo = async (req, res) => {
  // id를 통해 해당 소비내역 정보가 전달되어야 할 것임.
  const {
    params: { id },
  } = req;
  try {
    const updateUser = await Paying.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    return res.json(updateUser);
  } catch (error) {
    return res.json({ sucess: false, error });
  }
};

export const deletePayingInfo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await Paying.findByIdAndRemove({ _id: id });
    return res.status(204);
  } catch (error) {
    return res.status(500).json({ sucess: false, error });
  }
};

export const getPayingDetail = (req, res) => {
  const {
    params: { id },
  } = req;
  try {
  } catch (error) {
    return res.json({ sucess: false, error });
  }
};
