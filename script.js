//initial state

const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// actions

const INCREMENT = "increment";
const DECREMENT = "decrement";

const increment = () => {
  return {
    type: INCREMENT,
    payload: 5,
  };
};

const decrement = () => {
  return {
    type: DECREMENT,
    payload: 2,
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
  store.dispatch(increment());
});

decrementEl.addEventListener("click", () => {
  store.dispatch(decrement());
});
