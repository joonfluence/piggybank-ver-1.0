import User from "../models/User.js"

export const getHome = (req, res) => {
    res.send("Home");
}

export const getUserInfo = async (req, res) => {
    try {
        const user = await User.create({
            name : "Joonho Lee",
            userId : "Joonfluence",
            email : "goodfluence@naver.com",
            password : "1234",
            montlyBudget : 600000,
            savingGoal : 0
        });
        user.save();
        console.log(user);
    } catch(error) {
        console.log(error);
        res.redirect("/");
        res.status(400);
    } finally {
        res.end();
    }
}
