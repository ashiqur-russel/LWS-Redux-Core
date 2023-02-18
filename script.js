//initial state

const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// actions

const INCREMENT = "increment";
const DECREMENT = "decrement";

const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

const initalState = {
  value: 0,
};

// Create reducer function

function createReducer(state = initalState, action) {
  if (action.type === INCREMENT) {
    return { ...state, value: state.value + action.payload };
  }
  if (action.type === DECREMENT) {
    return { ...state, value: state.value - action.payload };
  } else {
    return state;
  }
}

// create store

const store = Redux.createStore(createReducer);

const render = () => {
  const state = store.getState();

  counterEl.innerText = state.value.toString();
};

//Update state Initially
render();

store.subscribe(render);

//Listen event handler
incrementEl.addEventListener("click", () => {
  store.dispatch(increment(50));
});

decrementEl.addEventListener("click", () => {
  store.dispatch(decrement(2));
});
