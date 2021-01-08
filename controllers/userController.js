import User from "../models/User.js"

export const getHome = (req, res) => {
    res.send("Home");
}

export const getUserInfo = async (req, res) => {   
    const user = await User.create();
    // res.send({ message: "hi" });
}
