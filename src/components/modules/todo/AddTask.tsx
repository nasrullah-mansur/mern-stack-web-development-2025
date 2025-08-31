import { useState } from "react";


function AddTask({ onAddTask }: { onAddTask: (p1: string) => void; }) {

    const [text, setText] = useState('');

    const handleClick = () => {
        onAddTask(text);
        setText("");
    }

    return (
        <div className="flex w-full mb-5">
            <input
                value={text}
                type="text"
                onChange={(e) => setText(e.target.value)}
                id="Email"
                placeholder="write task"
                className="mt-0.5 px-3 lg:text-lg h-auto w-full rounded border border-indigo-600 shadow-sm sm:text-sm"
            />

            <button onClick={handleClick}
                className="inline-flex cursor-pointer ml-3 items-center gap-2 rounded-sm border border-indigo-600 px-8 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:ring-3 focus:outline-hidden"

            >
                <span className="text-sm font-medium text-nowrap "> Add task </span>

                <svg
                    className="size-5 shadow-sm rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                </svg>
            </button>
        </div>
    );
}

export default AddTask;