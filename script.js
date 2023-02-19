const matchContainerEl = document.getElementById("match-container");
const addNewMatchEl = document.getElementById("btn-add-match");
const totalScoreEl = document.getElementById("total");
const resetEl = document.getElementById("btn-reset");
const inputIncrementEl = document.getElementById("increment");
const inputDecrementtEl = document.getElementById("decrement");

//Initial match count when button click increase by 1
let match_count = 1;
//Initial State

const initalState = {
  total: 0,
  match_no: match_count,
};

//Actions
const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";
const ADD_NEW_MATCH = "addMatch";

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

const addNewMatch = (value) => {
  return {
    type: ADD_NEW_MATCH,
    payload: value,
  };
};

// Create reducer function

function createReducer(state = initalState, action) {
  if (action.type === INCREMENT) {
    return { ...state, value: state.value + action.payload };
  }
  if (action.type === DECREMENT) {
    return { ...state, value: state.value - action.payload };
  }
  if (action.type === ADD) {
    return {
      ...state,
      properties: {
        ...state.properties,
        b: state.properties.b + action.payload,
      },
    };
  } else {
    return state;
  }
}
//Add new match div usign button click
addNewMatchEl.addEventListener("click", () => {
  match_count++;
  console.log("clicked");
  let div = document.createElement("div");
  div.innerHTML = `<div class="match" id="match-${match_count}">
                    <div class="wrapper">
                        <button class="lws-delete">
                            <img src="./image/delete.svg" alt="" />
                        </button>
                        <h3 class="lws-matchName">Match ${match_count}</h3>
                    </div>
                    <div class="inc-dec">
                        <form class="incrementForm">
                            <h4>Increment</h4>
                            <input type="number" name="increment" class="lws-increment" id="increment" />
                        </form>
                        <form class="decrementForm" id="decrement">
                            <h4>Decrement</h4>
                            <input type="number" name="decrement" class="lws-decrement" />
                        </form>
                    </div>
                    <div class="numbers">
                        <h2 class="lws-singleResult" id="total-match-${match_count}">0</h2>
                    </div>
                </div>`;

  matchContainerEl.appendChild(div);
});

// Take the input value from increment field
inputIncrementEl.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    console.log(event.target.value);
    let currentValue = event.target.value;
    increment(currentValue);
  }
});

// Take the input value from Decrement field

inputDecrementtEl.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    console.log(event.target.value);
    let currentValue = event.target.value;
    increment(currentValue);
  }
});
