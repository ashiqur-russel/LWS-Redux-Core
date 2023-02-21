import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counter/actions";
const HooksCounter = () => {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const incrementHandler = (value) => {
    dispatch(increment(value));
  };

  const decrementHanlder = (value) => {
    dispatch(decrement(value));
  };
  return (
    <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div class="text-2xl font-semibold">{count}</div>
      <div class="flex space-x-3">
        <button
          onClick={() => incrementHandler(5)}
          class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
        >
          Increment
        </button>
        <button
          onClick={() => decrementHanlder(2)}
          class="bg-red-400 text-white px-3 py-2 rounded shadow"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default HooksCounter;
