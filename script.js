//initial state

const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

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
  store.dispatch({
    type: "increment",
  });
});

decrementEl.addEventListener("click", () => {
  store.dispatch({
    type: "decrement",
  });
});
