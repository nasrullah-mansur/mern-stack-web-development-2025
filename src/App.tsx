import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/modules/counter/counter.slice";

function App() {

  const dispatch = useDispatch();

  const { count } = useSelector((store) => store.counter);

  const handleIncrement = () => {
    dispatch(increment());
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  return (
    <div className="flex gap-2">
      <button onClick={handleIncrement} className="bg-red-600 px-6 py-2 cursor-pointer text-white">increment</button>
      <h1 className="text-3xl">{count}</h1>
      <button onClick={handleDecrement} className="bg-red-600 px-6 py-2 cursor-pointer text-white">decrement</button>
    </div>
  )
}

export default App
