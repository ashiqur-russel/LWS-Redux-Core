import { DECREMNET, INCREMENT } from "./actionTypes";
export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMNET,
  };
};
