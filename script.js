//initial state

const initalState = {
  value: 0,
};

// Create reducer function

function createReducer(state = initalState, action) {
  if (action.type === "increment") {
    return { ...state, value: state.value + 1 };
  }
  if (action.type === "decrement") {
    return { ...state, value: state.value - 1 };
  } else {
    return state;
  }
}
