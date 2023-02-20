const btnAddDivEl = document.getElementById("addMatch");
const container = document.getElementById("container");

//Actions
const INCREMENT = "increment";
const DECREMENT = "decrement";
const ADD_DIV = "addDiv";
let matchId = 1;
// Intitial State
const initialState = {
  divs: [],
  match_id: 1,
  score: 0,
};

//Reducer
function createReducer(state = initialState, action) {
  console.log(action);

  switch (action.type) {
    case "ADD_DIV":
      // Add a new div to the state
      return {
        ...state,
        divs: [...state.divs, action.payload],
      };
    default:
      return state;
  }
}

// Create a new Redux store with the divReducer function

// create store

const store = Redux.createStore(createReducer);

const render = () => {
  const state = store.getState();
  console.log(state);
  const { divs, match_id } = state;

  divs.forEach((div) => container.appendChild(div));

  //scoreEl.innerText = state.value.toString();
};

//Update state Initially
render();

store.subscribe(render);
//Button event listner
btnAddDivEl.addEventListener("click", () => {
  matchId++;
  console.log("cli");
  // Create a new div element
  const div = document.createElement("div");
  div.setAttribute("class", "match");
  div.innerHTML = ` 
                    <div class="wrapper">
                        <button class="lws-delete">
                            <img src="./image/delete.svg" alt="" />
                        </button>
                        <h3 class="lws-matchName">Match <span id="match_id">${matchId}</span></h3>
                    </div>
                    <div class="inc-dec">
                        <form class="incrementForm">
                            <h4>Increment</h4>
                            <input type="number" name="increment" class="lws-increment" />
                        </form>
                        <form class="decrementForm">
                            <h4>Decrement</h4>
                            <input type="number" name="decrement" class="lws-decrement" />
                        </form>
                    </div>
                    <div class="numbers">
                        <h2 class="lws-singleResult">120</h2>
                    </div>
                `;

  // Dispatch an action to add the new div to the state
  store.dispatch({
    type: "ADD_DIV",
    payload: div,
  });
});

function submit() {
  console.log("cli");
}

//first div
const firstDiv = document.createElement("div");
firstDiv.setAttribute("class", "match");
firstDiv.innerHTML = `
                 

                    <div class="wrapper">
                        <button class="lws-delete">
                            <img src="./image/delete.svg" alt="" />
                        </button>
                        <h3 class="lws-matchName">Match <span id="match_id">${matchId}</span></h3>
                    </div>
                    <div class="inc-dec">
                        <form class="incrementForm">
                            <h4>Increment</h4>
                            <input type="number" name="increment" class="lws-increment" />
                        </form>
                        <form class="decrementForm">
                            <h4>Decrement</h4>
                            <input type="number" name="decrement" class="lws-decrement" />
                        </form>
                    </div>
                    <div class="numbers">
                        <h2 class="lws-singleResult">120</h2>
                    </div>
             
                `;
console.log(firstDiv);

container.appendChild(firstDiv);
