import { DDECREMNET, DINCREMENT } from "./actionTypes";

const initialState = [{ id: 1, value: 1 }];
const dynamicCounterReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case DINCREMENT: {
      return {
        ...state,
        value: state.value + action.payload,
      };
    }
    case DDECREMNET: {
      return {
        ...state,
        value: state.value - action.payload,
      };
    }

    default:
      return state;
  }
};

export default dynamicCounterReducer;
