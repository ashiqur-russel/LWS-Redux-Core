import { DECREMNET, INCREMENT } from "./actionTypes";
export const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

export const decrement = (value) => {
  return {
    type: DECREMNET,
    payload: value,
  };
};
