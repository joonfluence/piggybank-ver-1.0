import {
  CREATE_PAYING,
  READ_PAYING,
  UPDATE_PAYING,
  DELETE_PAYING,
} from "../types";

// 관리할 States : 날짜, 제목, 메모, 가격, 카테고리

const initialState = {
  date: "",
  title: "",
  price: "",
  memo: "",
  category: "",
};

const paying_reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PAYING:
      return { ...state, CreateSuccess: action.payload };
    case READ_PAYING:
      return { ...state, ReadSuccess: action.payload };
    case UPDATE_PAYING:
      return { ...state, UpdateSuccess: action.payload };
    case DELETE_PAYING:
      return { ...state, DeleteSuccess: action.payload };
    default:
      return state;
  }
};

export default paying_reducer;
