import axios from "axios";

export const Api = {
        getConsumptionInfo : () => axios.get("/"),
        getUserInfo : () => axios.get("/myPage"),
        getPayingInfo : () => axios.get("/api/"),
        postPayingInfo : () => axios.post("/api"),
        getSavingInfo : () => axios.get("/saving"),
        getSavingDetail : () => axios.get("/savings/:id"),
        editUserInfo : () => axios.post("/mypage/edit/:id"),
        getPayingDetail : () => axios.get("/consumption/:id")
}

export default Api;