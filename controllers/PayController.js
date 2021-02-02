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
    return res.status(500).json({ success: false, error });
  }
};

export const getPayingInfo = async (req, res) => {
  const { _id } = req.user;
  // console.log(req.user);
  try {
    const userInfo = await Paying.find({ user: [_id] });
    return res.status(200).json(userInfo);
  } catch (error) {
    return res.status(500).json({ sucess: false, error });
  }
  // console.log(newUser);
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
    return res.status(500).json({ sucess: false, error });
  }
};

export const getPayingDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const payInfo = await Paying.findById({ _id: id });
    const { title, price } = payInfo;
    return res.status(200).json({
      title,
      price,
    });
  } catch (error) {
    return res.status(500).json({ sucess: false, error });
  }
};
