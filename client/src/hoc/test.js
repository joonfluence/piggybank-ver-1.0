import axios from "axios";

export const TEST_REDUX = "test_redux";

export const getTestInfo = async () => {
  const request = await axios.get("http://localhost:5000/api/payings", {
    withCredentials: true,
  });
  return {
    type: TEST_REDUX,
    payingList: request.data.payingList,
  };
};

const initialState = {};

function testReducer(state = initialState, action) {
  switch (action.type) {
    case TEST_REDUX:
      return {
        payingList: action.payingList,
      };
    default:
      return state;
  }
}

export default testReducer;
