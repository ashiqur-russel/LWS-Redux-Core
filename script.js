const matchContainerEl = document.getElementById("match-container");
const addNewMatchEl = document.getElementById("btn-add-match");
let match_count = 1;
addNewMatchEl.addEventListener("click", () => {
  match_count++;
  console.log("clicked");
  let div = document.createElement("div");
  div.innerHTML = `<div class="match" id="match">
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
                        <h2 class="lws-singleResult" id="total">0</h2>
                    </div>
                </div>`;

  matchContainerEl.appendChild(div);
});
