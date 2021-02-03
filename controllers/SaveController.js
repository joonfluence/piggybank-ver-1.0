import Saving from "../models/Saving.js";

// 4) 저축정보 CRUD Controller

export const postSavingInfo = async (req, res) => {
  const { category, title, price } = req.body;
  const { _id } = req.user;

  try {
    const newSaving = await Saving.create({
      user: [_id],
      category,
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

export const getSavingMonth = (req, res) => res.send("getSavingMonth");
