import { DDECREMNET, DINCREMENT } from "./actionTypes";
export const increment = (value) => {
  return {
    type: DINCREMENT,
    payload: value,
  };
};

export const decrement = (value) => {
  return {
    type: DDECREMNET,
    payload: value,
  };
};
