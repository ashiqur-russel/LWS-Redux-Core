import { DECREMNET, INCREMENT } from "./actionTypes";

const initialState = {
  value: 9,
};
const counterReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        value: state.value + action.payload,
      };
    }
    case DECREMNET: {
      return {
        ...state,
        value: state.value - action.payload,
      };
    }

    default:
      return state;
  }
};

export default counterReducer;
