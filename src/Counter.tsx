
import { decrement, increment } from "./redux/modules/counter/counter.slice";
import { useAppDispatch, useAppSelector } from "./hook/reduxHook";

function Counter() {

    const dispatch = useAppDispatch();

    const { count } = useAppSelector((store) => store.counter);

    const handleIncrement = () => {
        dispatch(increment(5));
    }

    const handleDecrement = () => {
        dispatch(decrement(2))
    }

    return (
        <div className="flex gap-2">
            <button onClick={handleIncrement} className="bg-red-600 px-6 py-2 cursor-pointer text-white">increment</button>
            <h1 className="text-3xl">{count}</h1>
            <button onClick={handleDecrement} className="bg-red-600 px-6 py-2 cursor-pointer text-white">decrement</button>
        </div>
    )
}

export default Counter
